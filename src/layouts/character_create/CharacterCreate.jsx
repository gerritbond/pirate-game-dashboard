export const CharacterCreate = () => {
  const [name, setName] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [strength, setStrength] = useState(10);
  const [dexterity, setDexterity] = useState(10);
  const [constitution, setConstitution] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [wisdom, setWisdom] = useState(10);
  const [charisma, setCharisma] = useState(10);
  const [portrait, setPortrait] = useState(null);

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
      portrait,
    };
    console.log(characterData);
    // Further processing, such as sending data to a backend or updating global state
  };

  const handlePortraitChange = (e) => {
    setPortrait(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="character-create-container text-white">
      <form onSubmit={handleSubmit} className="character-create-form">
        <div className="character-create-section">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Character Name"
              required
            />
          </label>
          <label>
            Class:
            <select
              value={characterClass}
              onChange={(e) => setCharacterClass(e.target.value)}
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
        <div className="character-create-section">
          <h3>Attributes</h3>
          {['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'].map((attr, index) => (
            <label key={index}>
              {attr}:
              <input
                type="number"
                value={eval(attr.toLowerCase())}
                onChange={(e) => eval(`set${attr}`)(parseInt(e.target.value))}
                min="3"
                max="18"
              />
            </label>
          ))}
        </div>
        <div className="character-create-section">
          <label>
            Character Portrait:
            <input
              type="file"
              accept="image/*"
              onChange={handlePortraitChange}
              className="character-portrait-upload"
            />
          </label>
          {portrait && (
            <img
              src={portrait}
              alt="Character Portrait"
              className="character-portrait-preview"
            />
          )}
        </div>
        <button type="submit">Create Character</button>
      </form>
    </div>
  );
};

export default CharacterCreate;