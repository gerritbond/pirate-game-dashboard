import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { 
  jerryRhymes, 
  teasingMessages, 
  backgrounds, 
  classes, 
  skillList, 
  skillTypes,
  combatSkills,
  psychicSkills,
  allSkills,
  fociList,
  specialSkillCategories
} from './CharacterData';

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
  const [background, setBackground] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [rollCount, setRollCount] = useState(0);
  const [teasingMessage, setTeasingMessage] = useState('');
  const [rollMethod, setRollMethod] = useState('3d6');
  const [freeSkillPoints, setFreeSkillPoints] = useState({});
  const [adventurerClasses, setAdventurerClasses] = useState([]);

  const [skills, setSkills] = useState({
    administer: 0, connect: 0, exert: 0, fix: 0, heal: 0, know: 0, lead: 0,
    notice: 0, perform: 0, pilot: 0, program: 0, punch: 0, shoot: 0, sneak: 0,
    survive: 0, talk: 0, trade: 0, work: 0
  });
  const [skillPoints, setSkillPoints] = useState(null);
  const [skillPointsMessage, setSkillPointsMessage] = useState('');
  const [freeSkills, setFreeSkills] = useState([]);

  const [selectedFoci, setSelectedFoci] = useState([]);
  const [availableFociCount, setAvailableFociCount] = useState(1);

  const [hitPoints, setHitPoints] = useState(null);
  const [savingThrows, setSavingThrows] = useState({
    physical: null,
    evasion: null,
    mental: null,
    luck: null
  });

  const [backgroundSkill, setBackgroundSkill] = useState(null);
  const [additionalSkills, setAdditionalSkills] = useState([]);
  const [freeSkill, setFreeSkill] = useState(null);
  const [psychicSkills, setPsychicSkills] = useState([]);

  const [expandedSkill, setExpandedSkill] = useState(null);

  const rollDie = () => Math.floor(Math.random() * 6) + 1;

  const rollAttributes = () => {
    const rollAttribute = () => {
      if (rollMethod === '3d6') {
        return rollDie() + rollDie() + rollDie();
      } else { // '4d6 drop lowest'
        const rolls = [rollDie(), rollDie(), rollDie(), rollDie()];
        return rolls.reduce((a, b) => a + b, 0) - Math.min(...rolls);
      }
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
    console.log('Character created:', { characterName, background, characterClass, attributes });
  };

  const ScoreDisplay = ({ score, mod }) => (
    <div className="flex items-center justify-center space-x-2">
      <span className="text-2xl font-bold">{score}</span>
      <span className="text-sm bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">
        {mod >= 0 ? `+${mod}` : mod}
      </span>
    </div>
  );

  useEffect(() => {
    if (background) {
      const selectedBackground = backgrounds.find(bg => bg.value === background);
      if (selectedBackground) {
        const newFreeSkillPoints = {};
        selectedBackground.skills.forEach(skill => {
          newFreeSkillPoints[skill] = 1;
        });
        setFreeSkillPoints(newFreeSkillPoints);
      }
    } else {
      setFreeSkillPoints({});
    }
  }, [background]);

  useEffect(() => {
    if (characterClass === 'adventurer' && adventurerClasses.length === 2) {
      // Here you can handle the implications of the selected partial classes
      console.log(`Adventurer with partial classes: ${adventurerClasses.join(' and ')}`);
      // You might want to adjust skill points, abilities, etc. based on the selected partial classes
    }
  }, [characterClass, adventurerClasses]);

  useEffect(() => {
    // Set initial skill points based on class
    if (characterClass === 'warrior' || characterClass === 'expert') {
      setSkillPoints(4);
    } else if (characterClass === 'psychic') {
      setSkillPoints(2);
    } else if (characterClass === 'adventurer') {
      setSkillPoints(3);
    }
  }, [characterClass]);

  const handleBackgroundChange = (e) => {
    const newBackground = e.target.value;
    setBackground(newBackground);
    
    const selectedBackground = backgrounds.find(bg => bg.value === newBackground);
    if (selectedBackground) {
      setBackgroundSkill({ name: selectedBackground.skill, level: 0 });
      setFreeSkills(selectedBackground.skills.filter(skill => 
        skill !== specialSkillCategories.ANY_COMBAT &&
        skill !== specialSkillCategories.ANY_PSYCHIC &&
        skill !== specialSkillCategories.ANY_SKILL
      ));
      
      // Reset additional skills
      setAdditionalSkills([]);
      
      // Update skills object
      const newSkills = { ...skills };
      selectedBackground.skills.forEach(skill => {
        if (skill === specialSkillCategories.ANY_COMBAT ||
            skill === specialSkillCategories.ANY_PSYCHIC ||
            skill === specialSkillCategories.ANY_SKILL) {
          // These will be handled separately
        } else {
          newSkills[skill.toLowerCase()] = 0; // Set to level-0
        }
      });
      setSkills(newSkills);
    }
  };

  const handleAdditionalSkillSelection = (skill) => {
    if (additionalSkills.length < 2) {
      setAdditionalSkills(prev => [...prev, { name: skill, level: 0 }]);
      setSkills(prev => ({ ...prev, [skill.toLowerCase()]: 0 }));
    }
  };

  const handleSkillLevelIncrease = (skillName) => {
    setAdditionalSkills(prev => prev.map(skill => 
      skill.name === skillName && skill.level === 0 ? { ...skill, level: 1 } : skill
    ));
    setSkills(prev => ({ ...prev, [skillName.toLowerCase()]: 1 }));
  };

  const handleFreeSkillSelection = (skill) => {
    if (!freeSkill) {
      setFreeSkill({ name: skill, level: 0 });
      setSkills(prev => ({ ...prev, [skill.toLowerCase()]: 0 }));
    }
  };

  const handlePsychicSkillSelection = (skill) => {
    const maxPsychicSkills = characterClass === 'psychic' ? 2 : characterClass === 'adventurer' ? 1 : 0;
    if (psychicSkills.length < maxPsychicSkills) {
      setPsychicSkills(prev => [...prev, { name: skill, level: 0 }]);
      setSkills(prev => ({ ...prev, [skill.toLowerCase()]: 0 }));
    }
  };

  const calculateSkillPoints = () => {
    if (!characterClass || !attributes.intelligence.score) {
      setSkillPoints(null);
      setSkillPointsMessage('Select a class and set Intelligence to calculate skill points.');
      return;
    }

    const basePoints = characterClass === 'expert' ? 4 : 3;
    const intModifier = attributes.intelligence.mod;
    let totalPoints = basePoints + intModifier;

    // Add points from background if applicable
    if (background) {
      const selectedBackground = backgrounds.find(bg => bg.value === background);
      if (selectedBackground && selectedBackground.skillPoints) {
        totalPoints += selectedBackground.skillPoints;
      }
    }

    // Add points from foci if applicable
    selectedFoci.forEach(focusName => {
      const focus = fociList.find(f => f.name === focusName);
      if (focus && focus.levels[0].skillPoints) {
        totalPoints += focus.levels[0].skillPoints;
      }
    });

    // Subtract points for skills already selected
    totalPoints -= Object.values(skills).reduce((sum, level) => sum + level, 0);

    setSkillPoints(totalPoints);
    setSkillPointsMessage(`You have ${totalPoints} skill points to distribute.`);
  };

  useEffect(() => {
    calculateSkillPoints();
  }, [characterClass, attributes.intelligence, background, selectedFoci, skills]);

  useEffect(() => {
    // Update available foci count based on class
    if (characterClass === 'warrior') {
      setAvailableFociCount(2); // Warriors start with 2 foci
    } else {
      setAvailableFociCount(1);
    }
  }, [characterClass]);

  const handleSkillChange = (skill, increment) => {
    const currentValue = skills[skill.toLowerCase()];
    const newValue = currentValue + increment;
    if (newValue >= 0 && newValue <= 1) {
      if (increment > 0 && !freeSkills.includes(skill) && skillPoints <= 0) {
        return; // Can't increase if no skill points left
      }
      setSkills(prevSkills => ({
        ...prevSkills,
        [skill.toLowerCase()]: newValue
      }));
      if (!freeSkills.includes(skill)) {
        setSkillPoints(prevPoints => prevPoints - increment);
      }
    }
  };

  const handleFocusSelection = (focusName) => {
    if (selectedFoci.includes(focusName)) {
      setSelectedFoci(selectedFoci.filter(f => f !== focusName));
      // Remove skill impact
      const focus = fociList.find(f => f.name === focusName);
      if (focus.skillImpact) {
        Object.entries(focus.skillImpact).forEach(([skill, value]) => {
          setSkills(prev => ({...prev, [skill]: Math.max(0, prev[skill] - value)}));
        });
      }
    } else if (selectedFoci.length < availableFociCount) {
      setSelectedFoci([...selectedFoci, focusName]);
      // Apply skill impact
      const focus = fociList.find(f => f.name === focusName);
      if (focus.skillImpact) {
        Object.entries(focus.skillImpact).forEach(([skill, value]) => {
          setSkills(prev => ({...prev, [skill]: prev[skill] + value}));
        });
      }
    }
  };

  const calculateSavingThrow = (attributeValue) => {
    return attributeValue && !isNaN(attributeValue) 
      ? 15 - Math.floor(attributeValue / 3) 
      : null;
  };

  useEffect(() => {
    // Calculate hit points
    if (characterClass && attributes.constitution && !isNaN(attributes.constitution)) {
      const conMod = Math.floor((attributes.constitution - 10) / 2);
      let baseHP = 0;
      switch (characterClass) {
        case 'warrior':
          baseHP = 6;
          break;
        case 'expert':
        case 'adventurer':
          baseHP = 4;
          break;
        case 'psychic':
          baseHP = 2;
          break;
        default:
          baseHP = null;
      }
      setHitPoints(baseHP !== null ? Math.max(1, baseHP + conMod) : null);
    } else {
      setHitPoints(null);
    }

    // Calculate saving throws
    const newSavingThrows = {
      physical: calculateSavingThrow(attributes.constitution),
      evasion: calculateSavingThrow(attributes.dexterity),
      mental: calculateSavingThrow(attributes.wisdom),
      luck: attributes.charisma && attributes.wisdom && !isNaN(attributes.charisma) && !isNaN(attributes.wisdom)
        ? 15 - Math.floor((attributes.charisma + attributes.wisdom) / 6)
        : null
    };
    setSavingThrows(newSavingThrows);

  }, [characterClass, attributes]);

  const randomizeName = (e) => {
    e.preventDefault(); // Prevent form submission
    const randomIndex = Math.floor(Math.random() * jerryRhymes.length);
    setCharacterName(jerryRhymes[randomIndex]);
  };

  const handleClassChange = (e) => {
    const newClass = e.target.value;
    setCharacterClass(newClass);
    
    // Update skill points
    const selectedClass = classes.find(cls => cls.value === newClass);
    if (selectedClass) {
      setSkillPoints(selectedClass.skillPoints);
      
      // Calculate hit points (assuming Constitution modifier is 0 for this example)
      setHitPoints(selectedClass.hitDie);
    }
  };

  const handleSkillLevelChange = (skillName, increment) => {
    const currentLevel = skills[skillName.toLowerCase()];
    const newLevel = currentLevel + increment;

    if (newLevel >= 0 && newLevel <= 1) {
      const isFreeLevelUp = freeSkills.includes(skillName) && currentLevel === 0 && increment === 1;
      const isFreeLevelDown = freeSkills.includes(skillName) && currentLevel === 1 && increment === -1;

      if (isFreeLevelUp || isFreeLevelDown || (skillPoints > 0 && increment === 1) || increment === -1) {
        setSkills(prev => ({...prev, [skillName.toLowerCase()]: newLevel}));
        if (!isFreeLevelUp && !isFreeLevelDown) {
          setSkillPoints(prev => prev - increment);
        }
      }
    }
  };

  return (
    <div className="character-create-container p-6 max-w-6xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Create Your Character</h1>
      <p className="mb-6">Fill out the details below to create your Stars Without Number character.</p>

      <section className="character-basics mb-8">
        <h2 className="text-2xl font-semibold mb-4">Character Basics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <label htmlFor="characterName" className="block text-sm font-medium mb-1">Character Name</label>
              <div className="flex">
                <input
                  type="text"
                  id="characterName"
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                  className="flex-grow bg-gray-700 text-white rounded-l px-3 py-2"
                  placeholder="Enter character name"
                />
                <button
                  onClick={randomizeName}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r"
                  type="button"
                >
                  Randomize
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="background" className="block text-sm font-medium mb-1">Background</label>
              <select
                id="background"
                value={background}
                onChange={handleBackgroundChange}
                className="w-full bg-gray-700 text-white rounded px-3 py-2"
              >
                <option value="">Select a background</option>
                {backgrounds.map((bg) => (
                  <option key={bg.value} value={bg.value}>{bg.label}</option>
                ))}
              </select>
              <p>Background Skills: {freeSkills.join(', ')}</p>
            </div>
          </div>

          <div>
            <label htmlFor="characterClass" className="block text-sm font-medium mb-1">Class</label>
            <select
              id="characterClass"
              value={characterClass}
              onChange={handleClassChange}
              className="w-full bg-gray-700 text-white rounded px-3 py-2"
            >
              <option value="">Select a class</option>
              {classes.map((cls) => (
                <option key={cls.value} value={cls.value}>{cls.label}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="character-stats mb-8">
        <h2 className="text-2xl font-semibold mb-4">Character Stats</h2>
        
      </section>

      <form className="grid grid-cols-1 gap-6">
        <section className="attributes">
          <h2 className="text-2xl font-semibold mb-4">Attributes</h2>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
              <div className="flex justify-between items-center mb-2">
                <select
                  value={rollMethod}
                  onChange={(e) => setRollMethod(e.target.value)}
                  className="p-2 rounded bg-gray-800 border border-gray-700"
                >
                  <option value="3d6">3d6 (Standard)</option>
                  <option value="4d6">4d6 drop lowest (Optional)</option>
                </select>
                <button
                  type="button"
                  onClick={rollAttributes}
                  className="p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                >
                  Roll Attributes
                </button>
              </div>
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
          </DragDropContext>
        </section>

        <section className="foci mt-8">
          <h2 className="text-2xl font-semibold mb-4">Foci</h2>
          <p className="mb-4">Select up to {availableFociCount} {availableFociCount === 1 ? 'focus' : 'foci'}:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fociList.map(focus => (
              <div 
                key={focus.name} 
                className={`bg-gray-800 p-3 rounded cursor-pointer ${selectedFoci.includes(focus.name) ? 'border-2 border-yellow-500' : ''}`}
                onClick={() => handleFocusSelection(focus.name)}
              >
                <h3 className="font-medium mb-2">{focus.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{focus.description}</p>
                <p className="text-sm text-green-400">Level 1: {focus.level1Benefit}</p>
                <p className="text-sm text-blue-400">Level 2: {focus.level2Benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="skills mt-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          {skillPoints !== null ? (
            <p className="mb-4">Skill Points Remaining: <span className="text-yellow-500 font-bold">{skillPoints}</span></p>
          ) : (
            <p className="mb-4 text-yellow-500">{skillPointsMessage}</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillList.map(skill => (
              <div key={skill.name} className="bg-gray-800 p-3 rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-medium ${freeSkills.includes(skill.name) ? 'text-yellow-500' : ''}`}>
                    {skill.name}
                    {freeSkills.includes(skill.name) && ' (Free)'}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleSkillLevelChange(skill.name, -1)}
                      className="w-6 h-6 bg-red-500 text-white rounded flex items-center justify-center"
                      disabled={skills[skill.name.toLowerCase()] === 0 || freeSkills.includes(skill.name)}
                    >
                      -
                    </button>
                    <span className="w-8 text-center bg-gray-700">
                      {skills[skill.name.toLowerCase()] || 0}
                    </span>
                    <button
                      onClick={() => handleSkillLevelChange(skill.name, 1)}
                      className="w-6 h-6 bg-green-500 text-white rounded flex items-center justify-center"
                      disabled={skills[skill.name.toLowerCase()] === 1 || skillPoints === 0}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                  className="text-sm text-gray-400 hover:text-white focus:outline-none"
                >
                  {expandedSkill === skill.name ? 'Hide description' : 'Show description'}
                </button>
                {expandedSkill === skill.name && (
                  <p className="text-sm text-gray-400 mt-2">{skill.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="hit-points-and-saves mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="hit-points bg-gray-800 p-4 rounded">
            <h2 className="text-2xl font-semibold mb-4">Hit Points</h2>
            <div className="text-4xl font-bold text-center text-red-500">
              {hitPoints !== null ? hitPoints : (
                <span className="text-lg text-gray-400">
                  Select class and set Constitution
                </span>
              )}
            </div>
          </div>
          
          <div className="saving-throws bg-gray-800 p-4 rounded">
            <h2 className="text-2xl font-semibold mb-4">Saving Throws</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(savingThrows).map(([save, value]) => (
                <div key={save} className="text-center">
                  <div className="text-lg font-medium capitalize">{save}</div>
                  <div className="text-2xl font-bold text-blue-500">
                    {value !== null ? value : (
                      <span className="text-base text-gray-400">
                        Set {save === 'physical' ? 'CON' : 
                             save === 'evasion' ? 'DEX' : 
                             save === 'mental' ? 'WIS' : 
                             'WIS & CHA'}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="equipment">
          <h2 className="text-2xl font-semibold mb-4">Equipment</h2>
          {/* Equipment selection and customization */}
        </section>

        <section className="character-summary">
          <h2 className="text-2xl font-semibold mb-4">Character Summary</h2>
          {/* Collapsible summary content */}
        </section>

        <button type="submit" className="w-full p-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600">
          Save Character
        </button>
      </form>
    </div>
  );
};

export default CharacterCreate;

