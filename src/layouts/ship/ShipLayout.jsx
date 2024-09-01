import { useParams } from "react-router-dom";
import ships from "@fixtures/sample_ships";
import { ContextualDashboardLayout } from "../ContextualDashboardLayout";
import QuartermasterPanel from "./QuartermasterPanel";
import PurserPanel from "./PurserPanel";
import CombatPanel from "./CombatPanel";
import { EngineeringPanel } from "./EngineeringPanel";
import { formatCurrency } from "@utils/util";

const ShipDetailsSidePanel = ({ ship, load }) => {
  return (
    <div className="grid grid-cols-2">
      <div className="grid grid-rows-2 text-yellow-500">
        <div className="grid grid-cols-2 text-center">
          <span>{load.power} GWH</span>
          <span>{ship.fittingsLimits.power} GWH</span>
          <span className="font-bold font-mono col-span-2 text-center justify-center">
            Power
          </span>
        </div>
        <div className="grid grid-cols-1 text-center">
          <span className="">{formatCurrency(ship.creditsOnShip)}</span>
          <span className="font-bold font-mono">⦵ Balance</span>
        </div>
      </div>
      <div className="grid grid-rows-2 text-yellow-500">
        <div className="grid grid-cols-2 text-center justify-center">
          <span>{load.mass} Tons</span>
          <span>{ship.fittingsLimits.mass} Tons</span>
          <span className="font-bold font-mono col-span-2">Mass</span>
        </div>
        <div className="grid grid-cols-1 text-red-500 text-center">
          <span className="">{formatCurrency(ship.bounty)}</span>
          <span className="font-bold font-mono">⦵ Bounty</span>
        </div>
      </div>
    </div>
  );
};

export const ShipLayout = () => {
  const shipId = useParams(":shipId");
  const ship = ships[0]; // Replace this with an API call

  const panels = {
    Quartermaster: "quartermaster",
    Purser: "purser",
    Combat: "combat",
    Engineering: "engineering",
  };

  const contextualNavigation = [
    {
      name: "Quartermaster",
      state: panels.Quartermaster,
      tooltip: "Personnel Matters",
    },
    {
      name: "Purser",
      state: panels.Purser,
      tooltip: "All things money and provisions",
    },
    {
      name: "Combat",
      state: panels.Combat,
      tooltip: "Boom - POW - And other fun noises",
    },
    {
      name: "Engineering",
      state: panels.Engineering,
      tooltip: "3 days since last accident",
    },
  ];

  const actionButtons = [
    {
      name: "Do A Thing",
      func: () => console.log("thing a do"),
      tooltip: "Tooltip a thing",
    },
  ];

  const fullFittings = [...ship.fittings, ...ship.weapons, ...ship.defences];

  const shipLoad = {
    mass: fullFittings.reduce(
      (totalMass, fitting) => totalMass + fitting.mass,
      0
    ),
    power: fullFittings.reduce(
      (totalPowerRequired, fitting) => totalPowerRequired + fitting.power,
      0
    ),
    hardpoints: fullFittings.reduce(
      (totalHardpoints, fitting) =>
        totalHardpoints + (+fitting.hardpoints ? fitting.hardpoints : 0),
      0
    ),
  };

  const primaryPanelDisplayModeHandler = (context) => {
    switch (context) {
      case panels.Quartermaster:
        return <QuartermasterPanel shipDetails={ship} load={shipLoad} />;
      case panels.Purser:
        return <PurserPanel shipDetails={ship} load={shipLoad} />;
      case panels.Combat:
        return <CombatPanel shipDetails={ship} load={shipLoad} />;
      case panels.Engineering:
        return <EngineeringPanel shipDetails={ship} load={shipLoad} />;
    }
  };

  return (
    <ContextualDashboardLayout
      primaryPanel={(context) => (
        <div className="relative flex flex-1 w-full overflow-y-scroll scrollbar">
          <div className="relative w-full h-1">
            {primaryPanelDisplayModeHandler(context)}
          </div>
        </div>
      )}
      contextualNavigation={contextualNavigation}
      actionBar={actionButtons}
      sidePanel={(context) => (
        <ShipDetailsSidePanel ship={ship} load={shipLoad} />
      )}
    />
  );
};
