import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GameContext from "../contexts/GameContext";
import UserContext from "../contexts/UserContext";

const NavBar = () => {
  // TODO make this actually reference the signed in user
  const [date, setDate] = useState(new Date());
  const [game] = useContext(GameContext);
  const [user] = useContext(UserContext);

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="flex flex-col">
      <nav className="grid grid-cols-3 mt-2 ml-4 mr-3 justify-center font-mono text-xl">
        <div className="text-left bg-yellow-500 col-span-1 p-1">
          <Link to="/">
            <h1 className="font-mono font-bold text-xl uppercase ml-4 text-gray-900">
              Aquilifer.OS
            </h1>
          </Link>
        </div>
        <div className="text-right bg-yellow-500 p-1">
          {game && (
            <h1 className="font-mono font-bold text-xl uppercase mr-4 text-gray-900">
              {game.name}
            </h1>
          )}
        </div>
        <div className=" bg-yellow-500 mx-1 justify-center font-mono grid grid-cols-2">
          <p className="text-left ml-3 mt-1 text-gray-900 font-mono">
            /{user}/
          </p>
          <p className="text-right mr-3 mt-1 text-gray-900 font-mono">
            {date.toLocaleTimeString()}
          </p>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
