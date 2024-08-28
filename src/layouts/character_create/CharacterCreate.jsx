import React, { useState, useEffect } from 'react';
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
  const [rollCount, setRollCount] = useState(0);
  const [teasingMessage, setTeasingMessage] = useState('');

  const teasingMessages = [
    "Hmm, trying your luck again?",
    "Oh, a perfectionist, are we?",
    "Third time's the charm... right?",
    "You know the dice gods are watching, right?",
    "Ahem... 'randomly' generated, you say?",
    "Are you sure you're not looking for loaded dice?",
    "If you roll any more, we might have to call the RNG police!",
    "You dirty, dirty cheater!",
    "Okay, now you're just being ridiculous!",
    "STOP! STOP! The dice are already dead!"
  ];

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
    setRollCount(prevCount => prevCount + 1);
    
    if (rollCount > 0) {
      const messageIndex = Math.min(rollCount - 1, teasingMessages.length - 1);
      setTeasingMessage(teasingMessages[messageIndex]);
      setTimeout(() => setTeasingMessage(''), 3000); // Message disappears after 3 seconds
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    // Helper function to update attribute
    const updateAttribute = (attr, score) => ({
      score,
      mod: score !== null ? Math.floor((score - 10) / 2) : null
    });

    // Dragging from rolled scores to an attribute
    if (source.droppableId === 'rolledScores' && destination.droppableId !== 'rolledScores') {
      const score = rolledScores[source.index];
      const attr = destination.droppableId;

      setAttributes(prev => {
        const newAttributes = { ...prev };
        // If the attribute already had a score, add it back to the rolled scores
        if (newAttributes[attr].score !== null) {
          setRolledScores(prevScores => [...prevScores, newAttributes[attr].score]);
        }
        newAttributes[attr] = updateAttribute(attr, score);
        return newAttributes;
      });

      setRolledScores(prev => prev.filter((_, index) => index !== source.index));
    }
    // Dragging between attributes
    else if (source.droppableId !== 'rolledScores' && destination.droppableId !== 'rolledScores') {
      const sourceAttr = source.droppableId;
      const destAttr = destination.droppableId;

      setAttributes(prev => {
        const newAttributes = { ...prev };
        const sourceScore = prev[sourceAttr].score;
        const destScore = prev[destAttr].score;

        newAttributes[sourceAttr] = updateAttribute(sourceAttr, destScore);
        newAttributes[destAttr] = updateAttribute(destAttr, sourceScore);

        return newAttributes;
      });
    }
    // Dragging from attribute back to rolled scores
    else if (source.droppableId !== 'rolledScores' && destination.droppableId === 'rolledScores') {
      const attr = source.droppableId;
      const score = attributes[attr].score;

      setAttributes(prev => ({
        ...prev,
        [attr]: updateAttribute(attr, null)
      }));

      setRolledScores(prev => [...prev, score]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Character created:', { characterName, characterClass, attributes });
  };

  const ScoreDisplay = ({ score, mod }) => (
    <div className="flex items-center justify-center space-x-2">
      <span className="text-2xl font-bold">{score}</span>
      <span className="text-sm bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">
        {mod >= 0 ? `+${mod}` : mod}
      </span>
    </div>
  );

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
                      <label className="text-lg font-semibold capitalize mb-2">{attr}</label>
                      <div className="h-12 flex items-center justify-center border border-gray-700 rounded">
                        {score !== null ? (
                          <Draggable draggableId={`attr-${attr}`} index={0}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="w-full text-center cursor-move"
                              >
                                <ScoreDisplay score={score} mod={mod} />
                              </div>
                            )}
                          </Draggable>
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
            <div className="mt-4 relative">
              <button
                type="button"
                onClick={rollAttributes}
                className="w-full p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
              >
                Roll Attributes
              </button>
              {teasingMessage && (
                <div className="absolute top-full left-0 right-0 mt-2 text-center text-yellow-300 font-bold animate-bounce">
                  {teasingMessage}
                </div>
              )}
            </div>
            <Droppable droppableId="rolledScores" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {rolledScores.map((score, index) => (
                    <Draggable key={`score-${index}`} draggableId={`score-${index}`} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-gray-700 p-2 rounded cursor-move"
                        >
                          <ScoreDisplay score={score} mod={Math.floor((score - 10) / 2)} />
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

