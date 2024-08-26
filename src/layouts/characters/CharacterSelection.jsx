import { useMemo, useState } from "react";
import { ContextualDashboardLayout } from "../ContextualDashboardLayout";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CharacterList = ({ characters }) => {
  const [characterChunks, filler] = useMemo(() => {
    let chunks = [];
    for (let i = 0; i < characters.length; i += 8) {
      chunks.push(characters.slice(i, i + 8));
    }

    let filler = [];
    if (chunks.length > 0) {
      for (let i = 0; i < 8 - chunks[chunks.length - 1].length; i++) {
        filler.push(i);
      }
    }

    return [chunks, filler];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const deleteCharacterModal = () =>
    console.log(
      "TODO, Implement delete character modal confirmation and operations"
    );

  return (
    <div className="grid grid-rows-8">
      <div className="relative grid grid-cols-4 row-span-7 mx-3">
        {characterChunks[currentPage].map((character) => (
          <div
            className="relative overflow-hidden grid grid-rows-8 mx-2 my-2 border-yellow-500 border-2"
            key={character.id}
          >
            <div className="grid row-span-7 relative overflow-hidden border-yellow-500 border-b-2">
              <img
                className="absolute object-contain h-fit w-fit"
                src={character.imageUrl}
                alt={character.name + " profile image"}
              />
            </div>
            <div className="grid row-span-1 grid-cols-5 bg-yellow-500 justify-center items-center font-bold">
              <div className="grid pl-2">{character.level}</div>
              <Link
                className="grid col-span-3 text-center"
                to={`/characters/${character.id}`}
              >
                {character.name}
              </Link>
              <button
                className="w-full items-right"
                onClick={() => deleteCharacterModal(character.id)}
              >
                <BsTrash className="text-gray-950 w-full" />
              </button>
            </div>
          </div>
        ))}
        {characterChunks[currentPage].length >= 8 ? (
          <></>
        ) : (
          filler.map((f) => (
            <div
              className="relative overflow-hidden grid grid-rows-8 mx-2 my-2 border-yellow-500 border-2 opacity-30"
              key={"sil-" + f}
            >
              <div className="grid row-span-7 relative overflow-hidden border-yellow-500 border-b-2">
                <img
                  className="absolute object-contain h-fit w-fit"
                  src="\assets\scifi-silhouette.jpg"
                  alt={"Non-existant Character"}
                />
              </div>
              <div className="grid row-span-1 grid-cols-5 bg-yellow-500 justify-center items-center font-bold">
                <div className="grid pl-2"></div>
                <div className="grid col-span-3 text-center">Nameless</div>
                <div className="w-full "></div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="grid grid-cols-4 row-span-1 items-center">
        <button
          className="border-2 border-yellow-500 text-yellow-500 hover:text-gray-950 hover:bg-yellow-500 font-bold bg-gray-950 ml-5 mb-5 p-4"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage <= 0}
        >
          Previous
        </button>
        <Link
          to="/characters/new"
          className="col-span-2 border-2 text-center p-4 border-yellow-500 text-yellow-500 hover:text-gray-950 hover:bg-yellow-500 font-bold bg-gray-950 mx-3.5 mb-5 "
        >
          Create New Character
        </Link>
        <button
          className="border-2 border-yellow-500 text-yellow-500 hover:text-gray-950 hover:bg-yellow-500 font-bold bg-gray-950 mr-5 mb-5 p-4"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage >= characterChunks.length}
        >
          Next
        </button>
      </div>
    </div>
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
      imageUrl: "/assets/scifi-silhouette.jpg",
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
