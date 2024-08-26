import { Link } from "react-router-dom";

export const ShipListing = ({ ship }) => {
  const fullFittings = [...ship.fittings, ...ship.weapons, ...ship.defences];
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
    <div className="group relative p-1 m-1 bg-gray-900 rounded-md text-green-500">
      <img
        src={ship.image}
        alt={ship.name}
        className="min-h-30 min-w-30 max-h-30 max-w-30 aspect-square rounded-t-md"
      />
      <div className="absolute hidden lg:group-hover:block left-0 top-0 w-full h-full rounded-md p-2 bg-gray-900 text-green-500">
        <div className="text-left">
          <div className="grid grid-cols-2 align-text-bottom">
            <span className="text-2xl font-bold">{ship.name}</span>
            <div className="grid grid-cols-1">
              <span className="text-sm text-right font-light">
                {ship.location.system}
              </span>
              <span className="text-sm text-right font-light">
                {ship.registry}
              </span>
            </div>
          </div>
          <div className="p-3 pb-0">
            <span className="text-md">Overview</span>
            <span className="text-sm grid grid-cols-2">
              <p className="pl-5">Class</p>
              <p className="pr-5 text-right">{ship.class}</p>
            </span>
            <span className="text-sm grid grid-cols-2">
              <p className="pl-5">Hull</p>
              <p className="pr-5 text-right">{ship.hull}</p>
            </span>

            <span className="text-sm grid grid-cols-2">
              <p className="pl-5">Health</p>
              <p className="pr-5 text-right">
                {ship.hp.current}/{ship.hp.maximum}
              </p>
            </span>
            <span className="text-sm grid grid-cols-2">
              <p className="pl-5">Crew</p>
              <p className="pr-5 text-right">
                {ship.crew.current}/{ship.crew.maximum}
              </p>
            </span>
            <span className="text-sm grid grid-cols-2">
              <p className="pl-5">Power</p>
              <p className="pr-5 text-right">
                {shipLoad.power}/{ship.fittingsLimits.power}
              </p>
            </span>
            <span className="text-sm grid grid-cols-2">
              <p className="pl-5">Mass</p>
              <p className="pr-5 text-right">
                {shipLoad.mass}/{ship.fittingsLimits.mass}
              </p>
            </span>
            <span className="text-sm grid grid-cols-2">
              <p className="pl-5">Hardpoints</p>
              <p className="pr-5 text-right">
                {shipLoad.hardpoints}/{ship.fittingsLimits.hardpoints}
              </p>
            </span>
          </div>
          <div className="p-3">
            <span className="text-md">Cargo</span>

            {ship.cargo?.occupied?.map((cargo) => (
              <div className="text-sm grid grid-cols-2" key={cargo.name}>
                <p className="pl-5">{cargo.name}</p>
                <p className="pr-5 text-right">{cargo.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gray-900 p-2 rounded-b-md lg:group-hover:hidden">
          <div className="grid grid-cols-2">
            <h3 className="text-xl text-left font-bold -mb-1">{ship.name}</h3>
            <p className="font-light text-right">
              {ship.hull}, {ship.class}
            </p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-light">{ship.location.system}</p>
            <p className="font-light text-right">{ship.costs.shipValue}</p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full hidden lg:group-hover:block bg-green-500 text-slate-800 p-2 -ml-1 -mt-2 rounded-b-md">
          <Link to={`/ship/${ship.registry}`}>
            <div className="text-xl p-2 mb-1 text-center font-bold font-mono">
              <p>View Details</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
