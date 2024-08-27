import React, { useState } from 'react';

export const CharacterCreate = () => {
  const [name, setName] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [strength, setStrength] = useState(10);
  const [dexterity, setDexterity] = useState(10);
  const [constitution, setConstitution] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [wisdom, setWisdom] = useState(10);
  const [charisma, setCharisma] = useState(10);
  const [skills, setSkills] = useState({
    Administer: 0,
    Connect: 0,
    Exert: 0,
    Fix: 0,
    Heal: 0,
    Lead: 0,
    Notice: 0,
    Perform: 0,
    Pilot: 0,
    Program: 0,
    Shoot: 0,
    Sneak: 0,
    Survive: 0,
    Talk: 0,
    Trade: 0,
    Work: 0,
  });
  const [portrait, setPortrait] = useState(null);

  const handleSkillChange = (skill, value) => {
    setSkills({
      ...skills,
      [skill]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const characterData = {
      name,
      characterClass,
      attributes: {
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
      },
      skills,
      portrait,
    };
    console.log(characterData);
  };

  const handlePortraitChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPortrait(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="character-create-container p-6 max-w-5xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Create Your Character</h1>
        <p className="text-lg">Fill in the details below to bring your character to life!</p>
      </header>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="character-info">
          <label className="block mb-4">
            <span className="text-lg font-semibold">Character Name:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter character name"
              className="w-full mt-2 p-2 rounded bg-gray-800 border border-gray-700"
              required
            />
          </label>

          <label className="block mb-4">
            <span className="text-lg font-semibold">Class:</span>
            <select
              value={characterClass}
              onChange={(e) => setCharacterClass(e.target.value)}
              className="w-full mt-2 p-2 rounded bg-gray-800 border border-gray-700"
              required
            >
              <option value="" disabled>Select Class</option>
              <option value="Warrior">Warrior</option>
              <option value="Expert">Expert</option>
              <option value="Psychic">Psychic</option>
              <option value="Adventurer">Adventurer</option>
            </select>
          </label>
        </div>

        <div className="attributes-section grid grid-cols-2 gap-4">
          <h3 className="col-span-2 text-xl font-bold">Attributes</h3>
          {[
            { label: 'Strength', value: strength, setter: setStrength },
            { label: 'Dexterity', value: dexterity, setter: setDexterity },
            { label: 'Constitution', value: constitution, setter: setConstitution },
            { label: 'Intelligence', value: intelligence, setter: setIntelligence },
            { label: 'Wisdom', value: wisdom, setter: setWisdom },
            { label: 'Charisma', value: charisma, setter: setCharisma },
          ].map((attr, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-lg font-semibold">{attr.label}:</label>
              <input
                type="number"
                value={attr.value}
                onChange={(e) => attr.setter(parseInt(e.target.value))}
                min="3"
                max="18"
                className="w-full mt-2 p-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>
          ))}
        </div>

        <div className="skills-section lg:col-span-2">
          <h3 className="text-xl font-bold mb-4">Skills</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.keys(skills).map((skill) => (
              <div key={skill} className="flex flex-col">
                <label className="text-lg font-semibold">{skill}</label>
                <input
                  type="number"
                  value={skills[skill]}
                  onChange={(e) => handleSkillChange(skill, parseInt(e.target.value))}
                  min="0"
                  max="4"
                  className="w-full mt-2 p-2 rounded bg-gray-800 border border-gray-700"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="portrait-section lg:col-span-2">
          <label className="block mb-4">
            <span className="text-lg font-semibold">Character Portrait:</span>
            <input
              type="file"
              accept="image/*"
              onChange={handlePortraitChange}
              className="w-full mt-2 p-2 rounded bg-gray-800 border border-gray-700"
            />
          </label>
          {portrait && (
            <img
              src={portrait}
              alt="Character Portrait"
              className="w-32 h-32 mt-4 rounded-full border border-gray-700"
            />
          )}
        </div>

        <div className="review-submit-section lg:col-span-2 text-center mt-8">
          <button type="submit" className="w-full lg:w-1/4 p-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600">
            Create Character
          </button>
        </div>
      </form>
    </div>
  );
};

export default CharacterCreate;
