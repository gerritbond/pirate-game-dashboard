import { ContextualDashboardLayout } from "../ContextualDashboardLayout";
import { BsTrash } from "react-icons/bs";
import { PageableCardsGrid } from "../../components/PageableCardsGrid";

export const CharacterList = ({ characters }) => {
  const deleteCharacterModal = () =>
    console.log(
      "TODO, Implement delete character modal confirmation and operations"
    );

  return (
    <PageableCardsGrid
      entities={characters}
      itemLinkPath={"/characters"}
      centerButton={{
        path: "/characters/new",
        name: "Create New Character",
      }}
      optionalFunc={deleteCharacterModal}
      optionalFuncIcon={<BsTrash className="w-full" />}
      pageSize={8}
    />
  );
};

export const CharacterSelection = () => {
  const contextualNavigation = [];

  // TODO make this a call based on the currently signed in user
  const characters = [
    {
      id: 1,
      name: "Larry",
      level: 12,
      imageUrl: "/assets/fighter-starship.jpg",
    },
    {
      id: 2,
      name: "Jerry",
      level: 12,
      imageUrl: "/assets/space-raccoon.jpg",
    },
    {
      id: 3,
      name: "Gerry",
      level: 12,
      imageUrl: "/assets/scifi-silhouette.jpg",
    },
    {
      id: 4,
      name: "Barry",
      level: 12,
      imageUrl: "/assets/scifi-silhouette.jpg",
    },
    {
      id: 5,
      name: "Mary",
      level: 12,
      imageUrl: "/assets/scifi-silhouette.jpg",
    },
    {
      id: 6,
      name: "Harry",
      level: 12,
      imageUrl: "/assets/scifi-silhouette.jpg",
    },
    {
      id: 7,
      name: "Darry",
      level: 12,
      imageUrl: "/assets/scifi-silhouette.jpg",
    },
    {
      id: 8,
      name: "Fairy",
      level: 12,
      imageUrl: "/assets/scifi-silhouette.jpg",
    },
    {
      id: 9,
      name: "Terry",
      level: 12,
      imageUrl: "/assets/scifi-silhouette.jpg",
    },
    {
      id: 10,
      name: "Weary",
      level: 12,
      imageUrl: "/assets/scifi-silhouette.jpg",
    },
    {
      id: 11,
      name: "Perry",
      level: 12,
      imageUrl: "/assets/scifi-silhouette.jpg",
    },
  ];

  return (
    <ContextualDashboardLayout
      primaryPanel={() => <CharacterList characters={characters} />}
      contextualNavigation={contextualNavigation}
      actionBar={[
        {
          name: "Larry",
          func: () => console.log(12),
          tooltip: "/assets/scifi-silhouette.jpg",
        },
      ]}
    />
  );
};
