export const EngineeringSummary = ({ shipDetails }) => {
  const fullFittings = [
    ...shipDetails.fittings,
    ...shipDetails.weapons,
    ...shipDetails.defences,
  ];

  const shipLoad = {
    mass: fullFittings.reduce(
      (totalMass, fitting) => totalMass + fitting.mass,
      0
    ),
    power: fullFittings.reduce(
      (totalPowerRequired, fitting) => totalPowerRequired + fitting.power,
      0
    ),
    hardpoints: fullFittings.reduce(
      (totalHardpoints, fitting) =>
        totalHardpoints + (+fitting.hardpoints ? fitting.hardpoints : 0),
      0
    ),
  };

  return (
    <div className="grid grid-cols-3">
      <div className="bg-gray-900 dark:text-gray-400 p-4 m-1 rounded-lg">
        <p
          className={
            "p-2 text-center text-2xl " +
            (shipLoad.mass < shipDetails.fittingsLimits.mass
              ? "text-green-800"
              : "text-red-700")
          }
        >
          {shipLoad.mass} / {shipDetails.fittingsLimits.mass}
        </p>
        <p className="text-l font-bold text-center">Ship Mass 🧱</p>
      </div>
      <div className="bg-gray-900 dark:text-gray-400 p-4 m-1 rounded-lg">
        <p
          className={
            "p-2 text-center text-2xl " +
            (shipLoad.power < shipDetails.fittingsLimits.power
              ? "text-green-800"
              : "text-red-700")
          }
        >
          {shipLoad.power} / {shipDetails.fittingsLimits.power}
        </p>
        <p className="text-l font-bold text-center">Power 🗲</p>
      </div>
      <div className="bg-gray-900 dark:text-gray-400 p-4 m-1 rounded-lg">
        <p
          className={
            "p-2 text-center text-2xl " +
            (shipLoad.hardpoints < shipDetails.fittingsLimits.hardpoints
              ? "text-green-800"
              : "text-red-700")
          }
        >
          {shipLoad.hardpoints} / {shipDetails.fittingsLimits.hardpoints}
        </p>
        <p className="text-l font-bold text-center">Hardpoints ⚙</p>
      </div>
    </div>
  );
};

export const EngineeringPanel = ({ shipDetails }) => {
  const displayFittings = shipDetails.fittings.map((fitting) => {
    return { ...fitting, name: "⚙ " + fitting.name };
  });

  const displayWeapons = shipDetails.weapons.map((weapon) => {
    return { ...weapon, name: "⚔ " + weapon.name };
  });

  const displayDefences = shipDetails.defences.map((defence) => {
    return { ...defence, name: "⛨ " + defence.name };
  });

  const fullFittings = [
    ...displayFittings,
    ...displayWeapons,
    ...displayDefences,
  ];

  return (
    <div>
      <EngineeringSummary shipDetails={shipDetails} />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <th scope="col" className="px-6 py-3 rounded-tl-lg">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Total Mass
          </th>
          <th scope="col" className="px-6 py-3">
            Power Consumed
          </th>
          <th scope="col" className="px-6 py-3 rounded-tr-lg">
            Quantity
          </th>
        </thead>
        <tbody>
          {fullFittings
            .sort((fittingA, fittingB) =>
              fittingA.name.localeCompare(fittingB.name)
            )
            .map((fitting) => (
              <tr
                key={fitting.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th scope="row" className="px-6 py-3">
                  {fitting.name}
                </th>
                <td className="px-6 py-3">
                  🧱{" "}
                  {fitting.quantity
                    ? fitting.mass * fitting.quantity
                    : fitting.mass}
                </td>
                <td className="px-6 py-3">🗲 {fitting.power}</td>
                <td className="px-6 py-3">
                  {fitting.quantity ? fitting.quantity : 1}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
