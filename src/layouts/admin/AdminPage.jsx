import { ContextualDashboardLayout } from "../ContextualDashboardLayout";
import { GamesSelectionPanel } from "./GameSelectionPanel";
import { EventClockManagementPanel } from "./EventClockManagementPanel";
import { ItemManagementPanel } from "./ItemManagementPanel";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../../api/games";

export const AdminPage = () => {
  // TODO add a check for the uesr's games here instead of ALL games.
  const [games, setGames] = useState([]);
  const fetchGamesResult = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

  useEffect(() => {
    if (fetchGamesResult.data) {
      setGames(fetchGamesResult.data);
    }
  }, [fetchGamesResult.data]);

  const actionButtons = [];

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
