import ships from "@fixtures/sample_ships";
import { ContextualDashboardLayout } from "@layouts/ContextualDashboardLayout";
import { FaCoins } from "react-icons/fa";
import { PageableCardsGrid } from "@components/PageableCardsGrid";

export const FleetList = ({ ships }) => {
  const sellShip = () =>
    console.log("TODO, Implement Sell Ship Modal Confirmation and Flow");

  return (
    <PageableCardsGrid
      entities={ships}
      itemLinkPath={"/ships"}
      optionalFunc={sellShip}
      optionalFuncIcon={<FaCoins className="w-full" />}
      pageSize={8}
    />
  );
};

const FleetLayout = () => {
  const fleet = ships;

  const contextualNavigation = [
    {
      name: "Shipyard",
      state: "shipyard",
      tooltip: "Purchase new Ships",
    },
  ];

  const actionButtons = [
    {
      name: "Roll d4",
      func: () => console.log(4),
      tooltip: "Roll a d4 die",
    },
    {
      name: "Roll d6",
      func: () => console.log(6),
      tooltip: "Roll a d6 die",
    },
    {
      name: "Roll d8",
      func: () => console.log(8),
      tooltip: "Roll a d8 die",
    },
    {
      name: "Roll d10",
      func: () => console.log(10),
      tooltip: "Roll a d10 die",
    },
    {
      name: "Roll d12",
      func: () => console.log(12),
      tooltip: "Roll a d12 die",
    },
    {
      name: "Roll d20",
      func: () => console.log(20),
      tooltip: "Roll a d20 die",
    },
  ];

  return (
    <ContextualDashboardLayout
      primaryPanel={(context) => <FleetList ships={fleet} context={context} />}
      contextualNavigation={contextualNavigation}
      actionBar={actionButtons}
    />
  );
};
export default FleetLayout;
