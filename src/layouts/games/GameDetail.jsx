import { useParams } from "react-router-dom";
import { ContextualDashboardLayout } from "../ContextualDashboardLayout";
import { useQuery } from "@tanstack/react-query";
import { fetchGame } from "../../api/games";
import { GameForm } from "./GameForm";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import GameContext from "../../contexts/GameContext";
import { GameSummary } from "./GameSummary";

export const PlayerManagementPanel = () => {
  return <div>Player Management Panel</div>;
};

export const FeatureManagementPanel = () => {
  return <div>Feature Management Panel</div>;
};

export const GameDetailNavigationStates = {
  Players: "players",
  Features: "features",
  Game: "game",
  SelectNewGame: "select_new_game",
};

export const GameDetail = ({
  startingPanel = GameDetailNavigationStates.Game,
}) => {
  const { gameId } = useParams();
  const navigate = useNavigate();

  const { data: game, isLoading } = useQuery({
    queryKey: ["game", gameId],
    queryFn: () => fetchGame(gameId),
  });

  const actionButtons = [];

  const contextualNavigation = [
    {
      name: "Select New Game",
      state: GameDetailNavigationStates.SelectNewGame,
      tooltip: "",
    },
    {
      name: "Edit Game",
      state: GameDetailNavigationStates.Game,
      tooltip: "",
    },
    {
      name: "Manage Players",
      state: GameDetailNavigationStates.Players,
      tooltip: "",
    },
    {
      name: "Manage Features",
      state: GameDetailNavigationStates.Features,
      tooltip: "",
    },
  ];

  const primaryPanelDisplayModeHandler = (context) => {
    switch (context) {
      case GameDetailNavigationStates.Players:
        return <PlayerManagementPanel />;
      case GameDetailNavigationStates.Features:
        return <FeatureManagementPanel />;
      case GameDetailNavigationStates.SelectNewGame:
        navigate("/admin");
        return <div></div>;
      case GameDetailNavigationStates.Game:
        return <GameSummary game={game} />;
      case GameDetailNavigationStates.EditGame:
        return <GameForm mode="edit" game={game} />;
      default:
        return <GameForm mode="edit" game={game} />;
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
      startingPanel={startingPanel}
      contextualNavigation={contextualNavigation}
      actionBar={actionButtons}
      sidePanel={sidePanelDisplayModeHandler}
    />
  );
};
