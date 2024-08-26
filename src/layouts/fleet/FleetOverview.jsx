import { useMemo } from "react";
import { Link } from "react-router-dom";

const FleetOverview = ({ fleet }) => {
  const fleetLocations = useMemo(() => {
    const locations = {};
    fleet.ships.forEach((ship) => {
      if (!locations[ship.location.system]) locations[ship.location.system] = 0;
      locations[ship.location.system]++;
    });
    return locations;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, fleet.ships);

  return (
    <div className="hidden lg:col-span-1 lg:block md:col-span-1 md:block bg-gray-900 m-1 rounded-md text-green-500">
      <h1 className="text-2xl font-bold text-center">{fleet.name}</h1>
      <div>
        {Object.keys(fleetLocations)
          .sort()
          .map((location) => (
            <div key={location}>
              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-fuchsia-800 px-2"></div>
                <span className="text-md flex-shrink mx-4 font-bold">
                  {location}
                </span>
                <div className="flex-grow border-t border-fuchsia-800 px-2"></div>
              </div>

              {fleet.ships
                .filter((ship) => ship.location.destination === location)
                .sort((shipA, shipB) => shipA.name.localeCompare(shipB.name))
                .map((ship) => (
                  <Link to={`/ship/${ship.registry}`} key={ship.registry}>
                    <div className="pl-5 pr-5 grid grid-cols-3 hover:text-blue-300">
                      <span className="text-left">{ship.name}</span>
                      <span className="text-center">{ship.class}</span>
                      <span className="text-right">{ship.captain}</span>
                    </div>{" "}
                  </Link>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FleetOverview;
