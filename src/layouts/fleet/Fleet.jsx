import { ShipListing } from "./Ship";
import ships from "../../fixtures/sample_ships";
import { ContextualDashboardLayout } from "../ContextualDashboardLayout";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

const contextualNavigation = [
  {
    name: "Shipyard",
    state: "shipyard",
    tooltip: "Purchase new Ships",
  },
];

const actionButtons = [
  {
    name: "Roll d4",
    func: () => console.log(4),
    tooltip: "Roll a d4 die",
  },
  {
    name: "Roll d6",
    func: () => console.log(6),
    tooltip: "Roll a d6 die",
  },
  {
    name: "Roll d8",
    func: () => console.log(8),
    tooltip: "Roll a d8 die",
  },
  {
    name: "Roll d10",
    func: () => console.log(10),
    tooltip: "Roll a d10 die",
  },
  {
    name: "Roll d12",
    func: () => console.log(12),
    tooltip: "Roll a d12 die",
  },
  {
    name: "Roll d20",
    func: () => console.log(20),
    tooltip: "Roll a d20 die",
  },
];

const FleetGrid = ({ ships, context }) => {
  const [fleetChunks, filler] = useMemo(() => {
    let chunks = [];
    for (let i = 0; i < ships.length; i += 8) {
      chunks.push(ships.slice(i, i + 8));
    }

    let filler = [];
    if (chunks.length > 0) {
      for (let i = 0; i < 8 - chunks[chunks.length - 1].length; i++) {
        filler.push(i);
      }
    }

    return [chunks, filler];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const sellShip = () =>
    console.log("TODO, Implement Sell Ship Modal Confirmation and Flow");

  return (
    <div className="grid grid-rows-8">
      <div className="relative grid grid-cols-4 row-span-7 mx-3">
        {fleetChunks[currentPage].map((ship) => (
          <div
            className="relative overflow-hidden grid grid-rows-8 mx-2 my-2 border-yellow-500 border-2"
            key={ship.id ?? ship.registry}
          >
            <div className="grid row-span-7 relative overflow-hidden border-yellow-500 border-b-2">
              <img
                className="absolute object-contain"
                src={ship.imageUrl}
                alt={ship.name + " image"}
              />
            </div>
            <div className="grid row-span-1 grid-cols-5 bg-yellow-500 justify-center items-center font-bold">
              <div className="grid pl-2">
                {ship.hp.current} | {ship.hp.maximum}
              </div>
              <Link
                className="grid col-span-3 text-center"
                to={`/ships/${ship.id ?? ship.registry}`}
              >
                {ship.name}
              </Link>
              <button
                className="w-full items-right"
                onClick={() => sellShip(ship.id ?? ship.registry)}
              >
                <FaCoins className="text-gray-950 w-full" />
              </button>
            </div>
          </div>
        ))}
        {fleetChunks[currentPage].length >= 8 ? (
          <></>
        ) : (
          filler.map((f) => (
            <div
              className="relative overflow-hidden grid grid-rows-8 mx-2 my-2 border-yellow-500 border-2 opacity-30"
              key={"sil-" + f}
            >
              <div className="grid row-span-7 relative overflow-hidden border-yellow-500 border-b-2">
                <img
                  className="absolute object-contain h-fit w-fit"
                  src="\assets\empty-spaceport.jpg"
                  alt={"Non-existant Character"}
                />
              </div>
              <div className="grid row-span-1 grid-cols-5 bg-yellow-500 justify-center items-center font-bold">
                <div className="grid pl-2"></div>
                <div className="grid col-span-3 text-center">Empty Docks</div>
                <div className="w-full"></div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="grid grid-cols-4 row-span-1 items-center">
        <button
          className="border-2 border-yellow-500 text-yellow-500 hover:text-gray-950 hover:bg-yellow-500 font-bold bg-gray-950 ml-5 mb-5 p-4"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage <= 0}
        >
          Previous
        </button>
        <div className="col-span-2 text-center p-4 "></div>
        <button
          className="border-2 border-yellow-500 text-yellow-500 hover:text-gray-950 hover:bg-yellow-500 font-bold bg-gray-950 mr-5 mb-5 p-4"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage >= fleetChunks.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const FleetLayout = () => {
  const fleet = ships;

  return (
    <ContextualDashboardLayout
      primaryPanel={(context) => <FleetGrid ships={fleet} context={context} />}
      contextualNavigation={contextualNavigation}
      actionBar={actionButtons}
    />
  );

  // return (
  //   <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
  //     <FleetOverview fleet={fleet}></FleetOverview>
  //     <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:col-span-4 md:col-span-2 ">
  //       {!fleet.ships.length ? (
  //         <h1> Lost in space are we? </h1>
  //       ) : (
  //         fleet.ships
  //           .sort((shipA, shipB) => shipA.name.localeCompare(shipB.name))
  //           .map((ship) => <ShipListing ship={ship} key={ship.registry} />)
  //       )}
  //     </div>
  //   </div>
  // );
};
export default FleetLayout;
