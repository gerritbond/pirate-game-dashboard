import { formatCurrency } from "@utils/util";

export const CombatSummary = ({ shipDetails }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="bg-gray-900 dark:text-gray-400 p-4 m-1">
        <p className={"p-2 text-center text-2xl "}>{shipDetails.armour}</p>
        <p className="text-l font-bold text-center">Armour</p>
      </div>
      <div className="bg-gray-900 dark:text-gray-400 p-4 m-1">
        <p className={"p-2 text-center text-2xl "}>{shipDetails.speed}</p>
        <p className="text-l font-bold text-center">Speed</p>
      </div>
      <div className="bg-gray-900 dark:text-gray-400 p-4 m-1">
        <p
          className={
            "p-2 text-center text-2xl " +
            (shipDetails.hp?.current >= shipDetails.hp?.maximum / 2
              ? "text-green-800"
              : "text-red-700")
          }
        >
          {shipDetails.hp?.current} / {shipDetails.hp?.maximum}
        </p>
        <p className="text-l font-bold text-center">Health</p>
      </div>
    </div>
  );
};

export const CombatPanel = ({ shipDetails }) => {
  const displayWeapons = shipDetails.weapons?.map((weapon) => {
    return { ...weapon, name: "⚔ " + weapon.name };
  });

  return (
    <div>
      <CombatSummary shipDetails={shipDetails} />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Quantity
          </th>
          <th scope="col" className="px-6 py-3">
            Ammunition
          </th>
          <th scope="col" className="px-6 py-3">
            Cost to Replenish
          </th>
          <th scope="col" className="px-6 py-3">
            Damage
          </th>
          <th scope="col" className="px-6 py-3">
            Qualities
          </th>
          <th scope="col" className="px-6 py-3">
            Description
          </th>
        </thead>
        <tbody>
          {displayWeapons
            ?.sort((weaponA, weaponB) =>
              weaponA.name.localeCompare(weaponB.name)
            )
            .map((weapon) => (
              <tr
                key={weapon.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th scope="row" className="px-6 py-3">
                  {weapon.name}
                </th>
                <td className="px-6 py-3">{weapon.quantity}</td>
                <td className="px-6 py-3">
                  {weapon.ammunition?.current} / {weapon.ammunition?.maximum}
                </td>
                <td className="px-6 py-3">
                  {formatCurrency(weapon.ammunition?.replenishmentCost)}
                </td>
                <td className="px-6 py-3">{weapon.damage}</td>{" "}
                <td className="px-6 py-3">{weapon.qualities}</td>
                <td className="px-6 py-3">{weapon.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CombatPanel;
