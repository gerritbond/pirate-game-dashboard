import { sampleCharacter } from "@fixtures/sample_character";
import { BiographyPanel } from "./BiographyPanel";
import { EquipmentPanel } from "./EquipmentPanel";
import { StatsPanel } from "./StatsPanel";
import { PsionicsPanel } from "./PsionicsPanel";

import { ContextualDashboardLayout } from "../ContextualDashboardLayout";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AbilitiesPanel, AbilitiesSidePanel } from "./AbilitiesPanel";

export const CharacterSheetLayout = () => {
  let { characterId } = useParams();
  const character = { ...sampleCharacter, id: characterId };

  // TODO Wire up the ability for the player to select which actions should be available on the action bar for the character page
  const [actionButtons, setActionButtons] = useState([
    {
      name: "Action A",
      func: () => console.log("Action Action Action"),
      tooltip: "Yup, that's an action",
    },
  ]);

  // Fetch character from id (TODO)
  const navigationStates = {
    Biography: "biography",
    Equipment: "equipment",
    Stats: "stats",
    Psionics: "psionics",
    Abilities: "abilities",
  };

  const characterPanelContextualNavigation = [
    {
      name: "Biography",
      state: navigationStates.Biography,
      tooltip: "",
    },
    {
      name: "Equipment",
      state: navigationStates.Equipment,
      tooltip: "",
    },
    {
      name: "Stats",
      state: navigationStates.Stats,
      tooltip: "",
    },
    {
      name: "Psionics",
      state: navigationStates.Psionics,
      tooltip: "",
    },
    {
      name: "Abilities",
      state: navigationStates.Abilities,
      tooltip: "",
    },
  ];

  const primaryPanelDisplayModeHandler = (context) => {
    switch (context) {
      case navigationStates.Biography:
        return <BiographyPanel character={character} />;
      case navigationStates.Equipment:
        return <EquipmentPanel character={character} />;
      case navigationStates.Stats:
        return <StatsPanel character={character} />;
      case navigationStates.Psionics:
        return <PsionicsPanel character={character} />;
      case navigationStates.Abilities:
        return (
          <AbilitiesPanel
            character={character}
            actionBarState={[actionButtons, setActionButtons]}
          />
        );
    }
  };

  const sidePanelDisplayModeHandler = (context) => {
    switch (context) {
      default:
      case navigationStates.Abilities:
        return <AbilitiesSidePanel character={character} />;
    }
  };

  return (
    <ContextualDashboardLayout
      primaryPanel={primaryPanelDisplayModeHandler}
      contextualNavigation={characterPanelContextualNavigation}
      actionBar={actionButtons}
      sidePanel={sidePanelDisplayModeHandler}
    />
  );
};
