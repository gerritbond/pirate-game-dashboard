import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const CharacterCreate = () => {
  const [attributes, setAttributes] = useState({
    strength: { score: null, mod: null },
    dexterity: { score: null, mod: null },
    constitution: { score: null, mod: null },
    intelligence: { score: null, mod: null },
    wisdom: { score: null, mod: null },
    charisma: { score: null, mod: null },
  });
  const [rolledScores, setRolledScores] = useState([]);
  const [characterName, setCharacterName] = useState('');
  const [characterClass, setCharacterClass] = useState('');

  const rollAttributes = () => {
    const rollAttribute = () => {
      const rolls = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
      ];
      return rolls.reduce((a, b) => a + b, 0) - Math.min(...rolls);
    };

    const newScores = [
      rollAttribute(),
      rollAttribute(),
      rollAttribute(),
      rollAttribute(),
      rollAttribute(),
      rollAttribute(),
    ];

    setRolledScores(newScores);
    // Reset attributes when rerolling
    setAttributes(prevAttributes => 
      Object.fromEntries(
        Object.keys(prevAttributes).map(key => [key, { score: null, mod: null }])
      )
    );
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId === 'rolledScores' && destination.droppableId !== 'rolledScores') {
      const score = rolledScores[source.index];
      const attr = destination.droppableId;

      setAttributes(prev => ({
        ...prev,
        [attr]: { score, mod: Math.floor((score - 10) / 2) }
      }));

      setRolledScores(prev => prev.filter((_, index) => index !== source.index));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Character created:', { characterName, characterClass, attributes });
  };

  return (
    <div className="character-create-container p-6 max-w-7xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Create Character</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3">
          <label className="block mb-2">Character Name</label>
          <input
            type="text"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            required
          />
        </div>
        <div className="lg:col-span-3">
          <label className="block mb-2">Character Class</label>
          <input
            type="text"
            value={characterClass}
            onChange={(e) => setCharacterClass(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            required
          />
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="attributes-and-roller-section lg:col-span-3">
            <h3 className="text-xl font-bold mb-4">Attributes</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(attributes).map(([attr, { score, mod }]) => (
                <Droppable key={attr} droppableId={attr}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="flex flex-col bg-gray-800 p-2 rounded"
                    >
                      <label className="text-lg font-semibold capitalize">{attr}:</label>
                      <div className="mt-2 h-10 flex items-center justify-center border border-gray-700">
                        {score !== null ? (
                          <span>{score} (Mod: {mod})</span>
                        ) : (
                          <span className="text-gray-500">Drop score here</span>
                        )}
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
            <button
              type="button"
              onClick={rollAttributes}
              className="w-full mt-4 p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
            >
              Roll Attributes
            </button>
            <Droppable droppableId="rolledScores" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {rolledScores.map((score, index) => (
                    <Draggable key={index} draggableId={`score-${index}`} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-gray-700 p-2 rounded cursor-move"
                        >
                          {score}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
        <button type="submit" className="lg:col-span-3 w-full p-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600">
          Create Character
        </button>
      </form>
    </div>
  );
};

export default CharacterCreate;

