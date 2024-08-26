// I suspect this doesn't actually hold for higher than 18 scores, maybe rules of the game mean they dont go higher?
const getAttributeForAbility = (score) => {
  if (score <= 3) return "-2";
  else if (score <= 7) return "-1";
  else if (score <= 13) return "+0";
  else if (score <= 17) return "+1";
  else if (score >= 18) return "+2";
};

export const FociTable = ({ foci }) => {
  const displayFociTable = foci.length !== undefined && foci.length > 0;
  return (
    <div className="grid grid-cols-9">
      <div className="grid text-yellow-500 font-extrabold col-span-1 items-center text-center">
        <span className="text-2xl -rotate-90">Foci</span>
      </div>
      <table
        className={
          "grid col-span-8 w-fit text-sm text-left m-2 border-l-2 border-yellow-500" +
          (displayFociTable ? "" : " hidden")
        }
      >
        <thead className="text-xs uppercase bg-yellow-800 bg-opacity-75 text-yellow-500 border-t-1 border-yellow-500 ">
          <th scope="col" className="px-6 py-3 ">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Level
          </th>
          <th scope="col" className="px-6 py-3">
            Description
          </th>
        </thead>
        <tbody className="text-yellow-500">
          {foci
            .sort((fociA, fociB) => fociA.name.localeCompare(fociB.name))
            .map((foci) => (
              <tr
                key={foci.id}
                className="odd:bg-gray-800 even:bg-gray-900 bg-opacity-25"
              >
                <th scope="row" className="px-6 py-3">
                  {foci.name}
                </th>
                <td className="px-6 py-3">{foci.level}</td>
                <td className="px-6 py-3">{foci.description}</td>
              </tr>
            ))}
        </tbody>
        <caption className="text-md font-mono font-bold text-yellow-500 caption-bottom">
          Foci (+1 Focus at Levels 2, 5, 7, and 10)
        </caption>
      </table>
    </div>
  );
};

const DiceNotation = ({ roll }) => {
  if (roll.modifier > 0)
    return (
      <span>
        {roll.count}
        {roll.type} + {roll.modifier}
      </span>
    );
  else if (roll.modifier == 0)
    return (
      <span>
        {roll.count}
        {roll.type}
      </span>
    );
  else
    return (
      <span>
        {roll.count}
        {roll.type} - {roll.modifier}
      </span>
    );
};

// This is looking kind of rough right now, the table isn't rendering connected to each other appropriately
// Need to udnerstand what the heck is going on
export const WeaponsTable = ({ character }) => {
  const equipment = character.possessions.equipment;

  const unequippedWeapons =
    equipment.backpack?.filter((item) => item.type === "Weapon") ?? [];

  const equippedWeapons =
    equipment.equipped?.filter((item) => item.type === "Weapon") ?? [];

  console.log(character);
  if (unequippedWeapons.length === 0 && equippedWeapons.length === 0)
    return <div>You have no weapons! Weakling! </div>;

  return (
    <div className="grid grid-cols-9">
      <div className="grid text-yellow-500 font-extrabold col-span-1 items-center text-center">
        <span className="text-2xl -rotate-90">Weapons</span>
      </div>
      <table className="grid col-span-8 text-sm text-left m-2 border-l-2 border-yellow-500">
        <thead className="text-xs uppercase bg-yellow-800 bg-opacity-75 text-yellow-500 border-t-1 border-yellow-500 table">
          <th scope="col" className="px-6 py-3 ">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Range
          </th>
          <th scope="col" className="px-6 py-3">
            Attack Bonus
          </th>
          <th scope="col" className="px-6 py-3">
            Damage
          </th>
          <th scope="col" className="px-6 py-3">
            Equipped?
          </th>
          <th scope="col" className="px-6 py-3">
            Description
          </th>
        </thead>
        <tbody className="text-yellow-500 table text-left">
          {equippedWeapons
            .sort((wA, wB) => wA.name.localeCompare(wB.name))
            .map((w) => (
              <tr
                key={w.id}
                className="odd:bg-gray-800 even:bg-gray-900 bg-opacity-25"
              >
                <th scope="row" className="px-6 py-3">
                  {w.name}
                </th>
                <td className="px-6 py-3">
                  {w.range.type + " (" + w.range.distance + ")"}
                </td>
                <th scope="row" className="px-6 py-3">
                  {w.attackBonus ?? 0}
                </th>

                <td>
                  {w.roll.map((r) => (
                    <DiceNotation roll={r} key={r.type} />
                  ))}
                </td>
                <td>
                  <input type="checkbox" checked></input>
                </td>
                <td className="px-6 py-3">
                  {w.description}{" "}
                  FDSFDSFDSdskfdsklfjdsiofjdsiofjdsiofjdsiofdjsiofjdsiofjdsio
                  fiodsjfiodsjfidosjfiods
                </td>
              </tr>
            ))}
          {unequippedWeapons
            .sort((wA, wB) => wA.name.localeCompare(wB.name))
            .map((w) => (
              <tr
                key={w.id}
                className="odd:bg-gray-800 even:bg-gray-900 bg-opacity-25"
              >
                <th scope="row" className="px-6 py-3">
                  {w.name}
                </th>
                <td className="px-6 py-3">
                  {w.range.type + " (" + w.range.distance + ")"}
                </td>
                <th scope="row" className="px-6 py-3">
                  {w.attackBonus}
                </th>

                {w.roll.map((r) => (
                  <DiceNotation roll={r} key={r.type} />
                ))}
                <td>
                  <input type="checkbox"></input>
                </td>
                <td className="px-6 py-3">{w.description}</td>
              </tr>
            ))}
        </tbody>
        <caption className="text-md font-mono font-bold text-yellow-500 caption-bottom">
          To hit, 1d20 + Listed Attack Bonus ; Then roll damage
        </caption>
      </table>
    </div>
  );
};

export const AbilitiesPanel = ({ character, actionBarState }) => {
  const [actionButtons, setActionButtons] = actionBarState;

  return (
    <div className="relative flex flex-1 w-full overflow-y-scroll scrollbar">
      <div className="relative w-full h-1">
        <FociTable foci={character?.stats?.foci} />
        <WeaponsTable character={character} />
      </div>
    </div>
  );
  // This is the main do shit page, include psionic abilities if any, and weapon attacks here
};

export const AbilityScoreDisplay = ({ name, score }) => {
  return (
    <div className="grid grid-cols-2 font-bold font-mono h-fit text-yellow-500">
      <div className="grid text-center font-light p-1 mb-1">{score}</div>
      <div className="grid text-center p-1 mb-1">
        {getAttributeForAbility(score)}
      </div>
      <div className="font-bold font-mono text-center col-span-2">{name}</div>
    </div>
  );
};

export const AbilitiesSidePanel = ({ character }) => {
  const attributes = character.stats.attributes;

  console.log(character);

  return (
    <div className="relative grid grid-cols-3 text-gray-950 text-center justify-center items-center">
      <AbilityScoreDisplay name="Strength" score={attributes.strength} />
      <AbilityScoreDisplay name="Dexterity" score={attributes.dexterity} />
      <AbilityScoreDisplay
        name="Constitution"
        score={attributes.constitution}
      />
      <AbilityScoreDisplay
        name="Intelligence"
        score={attributes.intelligence}
      />
      <AbilityScoreDisplay name="Wisdom" score={attributes.wisdom} />
      <AbilityScoreDisplay name="Charisma" score={attributes.charisma} />
    </div>
  );
};
