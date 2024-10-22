import React, { useState, useEffect } from 'react';

function CharacterBasics({ character, updateCharacter }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateCharacter({ [name]: value });
  };

  const generateRandomName = () => {
    const rhymingNames = [
      "Berry", "Cherry", "Derry", "Ferry", "Gerry", "Kerry", "Merry", "Perry", "Terry", "Sherry"
    ];
    const randomName = rhymingNames[Math.floor(Math.random() * rhymingNames.length)];
    updateCharacter({ name: randomName });
  };

  const backgrounds = [
    "Barbarian", "Clergy", "Courtesan", "Criminal", "Dilettante", "Entertainer",
    "Merchant", "Noble", "Official", "Peasant", "Physician", "Pilot",
    "Politician", "Scholar", "Soldier", "Spacer", "Technician", "Thug"
  ];

  const classes = ["Warrior", "Expert", "Psychic", "Adventurer"];

  const homeworlds = ["Primitive/Lost Colony", "Settled Space", "Advanced Society"];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Character Basics</h2>
      
      {/* Name */}
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={character.name || ''}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        <button onClick={generateRandomName} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Random Name
        </button>
      </div>

      {/* Pronouns */}
      <div className="mb-4">
        <label htmlFor="pronouns" className="block mb-2">Pronouns</label>
        <select
          id="pronouns"
          name="pronouns"
          value={character.pronouns || ''}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select pronouns</option>
          <option value="He/Him">He/Him</option>
          <option value="She/Her">She/Her</option>
          <option value="They/Them">They/Them</option>
          <option value="Any/Any">Any/Any</option>
          <option value="Prefer not to say">Prefer not to say</option>
          <option value="Other">Other</option>
        </select>
        {character.pronouns === 'Other' && (
          <input
            type="text"
            name="customPronouns"
            value={character.customPronouns || ''}
            onChange={handleInputChange}
            placeholder="Enter custom pronouns"
            className="mt-2 w-full p-2 border rounded"
          />
        )}
      </div>

      {/* Background */}
      <div className="mb-4">
        <label htmlFor="background" className="block mb-2">Background</label>
        <select
          id="background"
          name="background"
          value={character.background || ''}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select background</option>
          {backgrounds.map((bg) => (
            <option key={bg} value={bg}>{bg}</option>
          ))}
        </select>
      </div>

      {/* Class */}
      <div className="mb-4">
        <label className="block mb-2">Class</label>
        <div className="flex flex-wrap gap-2">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => updateCharacter({ class: cls })}
              className={`px-4 py-2 rounded ${
                character.class === cls ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      {/* Homeworld */}
      <div className="mb-4">
        <label className="block mb-2">Homeworld</label>
        <div className="flex flex-wrap gap-2">
          {homeworlds.map((world) => (
            <button
              key={world}
              onClick={() => updateCharacter({ homeworld: world })}
              className={`px-4 py-2 rounded ${
                character.homeworld === world ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {world}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CharacterCreate() {
  console.log("CharacterCreate component rendered");

  useEffect(() => {
    console.log("CharacterCreate component mounted");
  }, []);

  const [character, setCharacter] = useState({
    basics: {},
    attributes: {},
    foci: [],
    skills: {},
    hitPointsAndSaves: {},
    psionics: {},
    equipment: [],
  });

  const [currentStep, setCurrentStep] = useState(0);

  const updateCharacter = (section, data) => {
    setCharacter(prevChar => ({
      ...prevChar,
      [section]: { ...prevChar[section], ...data },
    }));
  };

  const steps = [
    { title: 'Character Basics', component: CharacterBasics },
    // Other steps can be added here as they are implemented
  ];

  const CurrentStepComponent = steps[currentStep].component;

  console.log('Current step:', currentStep);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Character Creation</h1>
      
      {/* Current step */}
      <div className="border p-4 rounded">
        <CurrentStepComponent
          character={character.basics}
          updateCharacter={(data) => updateCharacter('basics', data)}
        />
      </div>

      {/* Character Summary */}
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h2 className="text-xl font-semibold mb-2">Character Summary</h2>
        <pre>{JSON.stringify(character, null, 2)}</pre>
      </div>
    </div>
  );
}
