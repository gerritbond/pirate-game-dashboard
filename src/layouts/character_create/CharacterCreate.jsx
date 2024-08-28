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
  const [skillPoints, setSkillPoints] = useState(0);
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

  const skillList = [
    { name: 'Administer', description: 'Manage organizations and bureaucracies' },
    { name: 'Connect', description: 'Find people and build networks' },
    { name: 'Exert', description: 'Physical feats of strength and endurance' },
    { name: 'Fix', description: 'Repair and build things' },
    { name: 'Heal', description: 'Treat injuries and cure diseases' },
    { name: 'Know', description: 'Education and general knowledge' },
    { name: 'Lead', description: 'Guide and command others' },
    { name: 'Notice', description: 'Spot hidden things and sense motives' },
    { name: 'Perform', description: 'Entertain and create art' },
    { name: 'Pilot', description: 'Operate vehicles and starships' },
    { name: 'Program', description: 'Use and create computer software' },
    { name: 'Punch', description: 'Unarmed combat' },
    { name: 'Shoot', description: 'Pew pew' },
    { name: 'Sneak', description: 'Move quietly and remain hidden' },
    { name: 'Survive', description: 'Endure harsh environments' },
    { name: 'Talk', description: 'Persuade and deceive others' },
    { name: 'Trade', description: 'Buy, sell, and evaluate goods' },
    { name: 'Work', description: 'General labor and craftsmanship' }
  ];

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

  const backgrounds = [
    { value: 'barbarian', label: 'Barbarian', description: 'You come from a world with a tech level of 0 or 1, or from the untamed hinterlands of a more advanced world.', skills: ['Survive', 'Notice', 'Any Combat'] },
    { value: 'clergy', label: 'Clergy', description: 'You were a priest, nun, monk, or other religious functionary in an organized faith.', skills: ['Talk', 'Perform', 'Know'] },
    { value: 'courtesan', label: 'Courtesan', description: 'You were trained in the arts of pleasure, entertainment, and social intrigue.', skills: ['Perform', 'Notice', 'Connect'] },
    { value: 'criminal', label: 'Criminal', description: 'You were a thief, smuggler, or other underworld figure.', skills: ['Sneak', 'Connect', 'Administer'] },
    { value: 'dilettante', label: 'Dilettante', description: 'You were a child of wealth and privilege.', skills: ['Connect', 'Know', 'Any Skill'] },
    { value: 'entertainer', label: 'Entertainer', description: 'You were a professional entertainer or artist.', skills: ['Perform', 'Talk', 'Any Skill'] },
    { value: 'merchant', label: 'Merchant', description: 'You were a trader in goods and services.', skills: ['Trade', 'Talk', 'Connect'] },
    { value: 'noble', label: 'Noble', description: 'You were a member of the ruling class.', skills: ['Lead', 'Connect', 'Administer'] },
    { value: 'official', label: 'Official', description: 'You were a member of the government bureaucracy.', skills: ['Administer', 'Connect', 'Know'] },
    { value: 'peasant', label: 'Peasant', description: 'You were a manual laborer or unskilled worker.', skills: ['Exert', 'Sneak', 'Survive'] },
    { value: 'physician', label: 'Physician', description: 'You were a doctor, nurse, or other medical professional.', skills: ['Heal', 'Know', 'Notice'] },
    { value: 'pilot', label: 'Pilot', description: "You were a spacecraft pilot or ship's crew member.", skills: ['Pilot', 'Fix', 'Trade'] },
    { value: 'politician', label: 'Politician', description: 'You were an elected or appointed government official.', skills: ['Talk', 'Lead', 'Connect'] },
    { value: 'scholar', label: 'Scholar', description: 'You were an academic or professional researcher.', skills: ['Know', 'Perform', 'Any Skill'] },
    { value: 'soldier', label: 'Soldier', description: 'You were a military member or mercenary.', skills: ['Any Combat', 'Exert', 'Survive'] },
    { value: 'technician', label: 'Technician', description: 'You were a mechanical or technical specialist.', skills: ['Fix', 'Know', 'Exert'] },
    { value: 'thug', label: 'Thug', description: 'You were a violent criminal or strong-arm enforcer.', skills: ['Any Combat', 'Talk', 'Connect'] },
    { value: 'vagabond', label: 'Vagabond', description: 'You were a wanderer, outcast, or exile.', skills: ['Survive', 'Notice', 'Any Skill'] },
    { value: 'worker', label: 'Worker', description: 'You were a skilled tradesman or artisan.', skills: ['Work', 'Exert', 'Connect'] },
  ];

  const classes = [
    { value: 'warrior', label: 'Warrior', description: 'Warriors are masters of combat and physical conflict.', primeAttribute: 'Strength or Dexterity' },
    { value: 'expert', label: 'Expert', description: 'Experts are skilled professionals and capable generalists.', primeAttribute: 'Intelligence or Charisma' },
    { value: 'psychic', label: 'Psychic', description: 'Psychics are humans gifted with metadimensional powers.', primeAttribute: 'Wisdom' },
    { value: 'adventurer', label: 'Adventurer', description: 'Adventurers blend the abilities of other classes.', primeAttribute: 'Any two' },
  ];

  const fociList = [
    {
      name: 'Alert',
      description: 'You\'re keenly aware of your surroundings and hard to surprise.',
      level1Benefit: 'Gain Notice as a bonus skill',
      level2Benefit: 'You always act in the first round of combat',
      skillImpact: { notice: 1 }
    },
    {
      name: 'Armsman',
      description: 'You\'re trained in the use of advanced weapons and armor.',
      level1Benefit: 'Gain any combat skill as a bonus skill',
      level2Benefit: 'You can use any armor or weapon without penalty',
      skillImpact: { combatSkill: 1 }
    },
    {
      name: 'Assassin',
      description: 'You\'re skilled at dealing sudden violence to unsuspecting victims.',
      level1Benefit: 'Gain Sneak as a bonus skill',
      level2Benefit: 'Your first attack in combat always surprises',
      skillImpact: { sneak: 1 }
    },
    {
      name: 'Authority',
      description: 'You\'re a natural leader with a talent for commanding others.',
      level1Benefit: 'Gain Lead as a bonus skill',
      level2Benefit: 'You can command up to 10 followers',
      skillImpact: { lead: 1 }
    },
    {
      name: 'Connected',
      description: 'You have a wide range of useful connections in your profession.',
      level1Benefit: 'Gain Connect as a bonus skill',
      level2Benefit: 'You can always find a way to get what you need',
      skillImpact: { connect: 1 }
    },
    {
      name: 'Die Hard',
      description: 'You\'re exceptionally difficult to kill and can survive grievous injuries.',
      level1Benefit: 'Gain Survive as a bonus skill',
      level2Benefit: 'You can survive without food or water for a week',
      skillImpact: { survive: 1 }
    },
    {
      name: 'Gunslinger',
      description: 'You\'re an expert shot with ranged weapons.',
      level1Benefit: 'Gain Shoot as a bonus skill',
      level2Benefit: 'You can shoot while moving',
      skillImpact: { shoot: 1 }
    },
    {
      name: 'Hacker',
      description: 'You\'re a master of digital intrusion and electronic warfare.',
      level1Benefit: 'Gain Program as a bonus skill',
      level2Benefit: 'You can hack any computer system',
      skillImpact: { program: 1 }
    },
    {
      name: 'Healer',
      description: 'You\'re talented at patching up injuries and curing ailments.',
      level1Benefit: 'Gain Heal as a bonus skill',
      level2Benefit: 'You can heal 2d6 hit points per round',
      skillImpact: { heal: 1 }
    },
    {
      name: 'Ironhide',
      description: 'Your skin is preternaturally tough and resistant to harm.',
      level1Benefit: 'Gain Exert as a bonus skill',
      level2Benefit: 'You have a +2 bonus to armor class',
      skillImpact: { exert: 1 }
    },
    {
      name: 'Savage Fray',
      description: 'You\'re exceptionally dangerous in melee combat.',
      level1Benefit: 'Gain Punch as a bonus skill',
      level2Benefit: 'You deal double damage with unarmed attacks',
      skillImpact: { punch: 1 }
    },
    {
      name: 'Sniper',
      description: 'You\'re a crackshot with long-ranged weapons.',
      level1Benefit: 'Gain Shoot as a bonus skill',
      level2Benefit: 'You can shoot at long range without penalty',
      skillImpact: { shoot: 1 }
    },
    {
      name: 'Specialist',
      description: 'You\'re especially talented with one particular skill.',
      level1Benefit: 'Choose a skill and gain it as a bonus skill',
      level2Benefit: 'You can use that skill at a +2 bonus',
      skillImpact: { specialist: 1 }
    },
    {
      name: 'Star Captain',
      description: 'You\'re a gifted starship pilot and leader.',
      level1Benefit: 'Gain Pilot as a bonus skill',
      level2Benefit: 'You can command a starship of any size',
      skillImpact: { pilot: 1 }
    },
    {
      name: 'Starfarer',
      description: 'You\'re unusually talented at interstellar navigation and stellar survival.',
      level1Benefit: 'Gain Survive as a bonus skill',
      level2Benefit: 'You can navigate any starship',
      skillImpact: { survive: 1 }
    },
    {
      name: 'Tinker',
      description: 'You\'re skilled at improvising and repairing equipment.',
      level1Benefit: 'Gain Fix as a bonus skill',
      level2Benefit: 'You can repair any equipment',
      skillImpact: { fix: 1 }
    },
    {
      name: 'Unarmed Combatant',
      description: 'You\'re a deadly fighter even without weapons.',
      level1Benefit: 'Gain Punch as a bonus skill',
      level2Benefit: 'You can disarm opponents with a successful unarmed attack',
      skillImpact: { punch: 1 }
    },
    {
      name: 'Wanderer',
      description: 'You\'re unusually talented at survival and blending in with alien cultures.',
      level1Benefit: 'Gain Survive as a bonus skill',
      level2Benefit: 'You can blend in with any culture',
      skillImpact: { survive: 1 }
    },
    // Add more foci as needed
  ];

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

  useEffect(() => {
    // Set free skills based on background
    if (background) {
      const selectedBackground = backgrounds.find(bg => bg.value === background);
      if (selectedBackground) {
        setFreeSkills(selectedBackground.skills);
        // Automatically set free skills to level 1
        const updatedSkills = { ...skills };
        selectedBackground.skills.forEach(skill => {
          if (skill !== 'Any Combat' && skill !== 'Any Skill') {
            updatedSkills[skill.toLowerCase()] = 1;
          }
        });
        setSkills(updatedSkills);
      }
    } else {
      setFreeSkills([]);
    }
  }, [background]);

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

  const jerryRhymes = [
    'Berry', 'Cary', 'Derry', 'Ferry', 'Gary', 'Harry', 'Kerry', 'Larry', 
    'Mary', 'Perry', 'Sherry', 'Terry', 'Very', 'Werry', 'Jerry'
  ];

  const randomizeName = (e) => {
    e.preventDefault(); // Prevent form submission
    const randomIndex = Math.floor(Math.random() * jerryRhymes.length);
    setCharacterName(jerryRhymes[randomIndex]);
  };

  const handleBackgroundChange = (e) => {
    const newBackground = e.target.value;
    setBackground(newBackground);
    
    // Reset free skills
    setFreeSkills([]);
    
    // Set new free skills based on background
    const selectedBackground = backgrounds.find(bg => bg.value === newBackground);
    if (selectedBackground) {
      setFreeSkills(selectedBackground.skills);
      
      // Update skills
      const newSkills = { ...skills };
      selectedBackground.skills.forEach(skill => {
        if (skill !== 'any combat') {
          newSkills[skill] = 1;
        }
      });
      setSkills(newSkills);
    }
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

  useEffect(() => {
    // Additional effects when background or class changes
    // For example, you might want to recalculate total skill points here
    const totalSkillPoints = characterClass ? classes.find(cls => cls.value === characterClass).skillPoints : 0;
    const usedSkillPoints = Object.values(skills).reduce((sum, value) => sum + value, 0);
    setSkillPoints(totalSkillPoints - usedSkillPoints);
  }, [background, characterClass, skills]);

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

        <section className="skills mt-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <p className="mb-4">Skill Points Remaining: <span className="text-yellow-500 font-bold">{skillPoints}</span></p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillList.map(skill => (
              <div key={skill.name} className="bg-gray-800 p-3 rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-medium ${freeSkills.includes(skill.name) ? 'text-yellow-500' : ''}`}>
                    {skill.name}
                    {freeSkills.includes(skill.name) && ' (Free)'}
                  </span>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleSkillChange(skill.name, -1)}
                      className="w-6 h-6 bg-red-500 text-white rounded-l flex items-center justify-center"
                      disabled={skills[skill.name.toLowerCase()] === 0 || freeSkills.includes(skill.name)}
                    >
                      -
                    </button>
                    <span className="w-8 text-center bg-gray-700">
                      {skills[skill.name.toLowerCase()]}
                    </span>
                    <button
                      onClick={() => handleSkillChange(skill.name, 1)}
                      className="w-6 h-6 bg-green-500 text-white rounded-r flex items-center justify-center"
                      disabled={skills[skill.name.toLowerCase()] === 1 || (skillPoints === 0 && !freeSkills.includes(skill.name))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
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

