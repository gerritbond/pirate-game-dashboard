import { ContextualDashboardLayout } from "../ContextualDashboardLayout";
import { GamesSelectionPanel } from "./GameSelectionPanel";
import { EventClockManagementPanel } from "./EventClockManagementPanel";
import { ItemManagementPanel } from "./ItemManagementPanel";
import { useGames } from "../../hooks/useGames";

export const AdminPage = () => {
  const [games] = useGames();

  const actionButtons = [];

  // Fetch character from id (TODO)
  const navigationStates = {
    Game: "game",
    EventClocks: "event-clocks",
    Items: "items",
  };

  const adminPanelContextualNavigation = [
    {
      name: "Game",
      state: navigationStates.Game,
      tooltip: "",
    },
    {
      name: "Event Clocks",
      state: navigationStates.EventClocks,
      tooltip: "",
    },
    {
      name: "Items",
      state: navigationStates.Items,
      tooltip: "",
    },
  ];

  const primaryPanelDisplayModeHandler = (context) => {
    switch (context) {
      case navigationStates.EventClocks:
        return <EventClockManagementPanel />;
      case navigationStates.Items:
        return <ItemManagementPanel />;
      case navigationStates.Game:
      default:
        return <GamesSelectionPanel games={games} />;
    }
  };

  const sidePanelDisplayModeHandler = (context) => {
    switch (context) {
      default:
        return <div></div>;
    }
  };

  return (
    <ContextualDashboardLayout
      primaryPanel={primaryPanelDisplayModeHandler}
      contextualNavigation={adminPanelContextualNavigation}
      actionBar={actionButtons}
      sidePanel={sidePanelDisplayModeHandler}
    />
  );
};
