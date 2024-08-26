export const PurserSummary = ({ shipDetails }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="bg-gray-900 dark:text-gray-400 p-4 m-1 rounded-lg">
        <p
          className={
            "p-2 text-center text-2xl " +
            (shipDetails.creditsOnShip > 0 ? "text-green-800" : "text-red-700")
          }
        >
          ⦵ {shipDetails.creditsOnShip}
        </p>
        <p className="text-l font-bold text-center">Credits On Hand</p>
      </div>
      <div className="bg-gray-900 dark:text-gray-400 p-4 m-1 rounded-lg">
        <p
          className={
            "p-2 text-center text-2xl " +
            (shipDetails.costs?.maintenance < shipDetails.creditsOnShip
              ? "text-green-800"
              : "text-red-700")
          }
        >
          ⦵ {shipDetails.costs?.maintenance}
        </p>
        <p className="text-l font-bold text-center">Crew Salary / 6mo</p>
      </div>
      <div className="bg-gray-900 dark:text-gray-400 p-4 m-1 rounded-lg">
        <p className="p-2 text-center text-2xl">
          {shipDetails.cargo?.empty} /{" "}
          {shipDetails.cargo?.empty +
            shipDetails.cargo?.occupied.reduce(
              (acc, cargo) => acc + cargo.space,
              0
            )}
        </p>
        <p className="text-l font-bold text-center">Cargo Space</p>
      </div>
    </div>
  );
};

export const PurserPanel = ({ shipDetails }) => {
  return (
    <div>
      <PurserSummary shipDetails={shipDetails} />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <th scope="col" className="px-6 py-3 rounded-tl-lg">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Description
          </th>
          <th scope="col" className="px-6 py-3">
            Quantity
          </th>
          <th scope="col" className="px-6 py-3 rounded-tr-lg">
            Cost
          </th>
        </thead>
        <tbody>
          {shipDetails?.cargo?.occupied
            ?.sort((cargoA, cargoB) => cargoA.localeCompare(cargoB))
            .map((item) => (
              <tr
                key={item.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th scope="row" className="px-6 py-3">
                  {item.name}
                </th>
                <td className="px-6 py-3">{item.description}</td>
                <td className="px-6 py-3">{item.quantity}</td>
                <td className="px-6 py-3">⦵ {item.cost}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurserPanel;
