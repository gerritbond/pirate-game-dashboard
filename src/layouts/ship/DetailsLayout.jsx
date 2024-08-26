/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ships from "../../fixtures/sample_ships";
import { QuartermasterSummary, QuartermasterPanel } from "./QuartermasterPanel";
import { PurserSummary, PurserPanel } from "./PurserPanel";
import { CombatSummary, CombatPanel } from "./CombatPanel";
import { EngineeringSummary, EngineeringPanel } from "./EngineeringPanel";
import { InformationPanels } from "../../components/InformationPanels";

export const Departments = {
  Overview: "overview",
  Quartermaster: "quartermaster",
  Purser: "purser",
  Combat: "combat",
  Engineering: "engineering",
};

const OverviewPanel = ({ shipDetails }) => {
  return (
    <div>
      <QuartermasterSummary shipDetails={shipDetails} />
      <CombatSummary shipDetails={shipDetails} />
      <EngineeringSummary shipDetails={shipDetails} />
      <PurserSummary shipDetails={shipDetails} />
    </div>
  );
};

const ShipDetailsLayout = ({ shipRegistry }) => {
  // Move this to calling the API
  const ship = {
    ...ships[0],
    registry: shipRegistry,
  };

  return (
    <InformationPanels
      panelOptions={Departments}
      delegatedRender={(panelState) => {
        switch (panelState) {
          case Departments.Quartermaster:
            return <QuartermasterPanel shipDetails={ship} />;
          case Departments.Combat:
            return <CombatPanel shipDetails={ship} />;
          case Departments.Engineering:
            return <EngineeringPanel shipDetails={ship} />;
          case Departments.Purser:
            return <PurserPanel shipDetails={ship} />;
          case Departments.Overview:
          default:
            return <OverviewPanel shipDetails={ship} />;
        }
      }}
    />
  );
};

export default ShipDetailsLayout;
