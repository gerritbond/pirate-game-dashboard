import { Link } from "react-router-dom";

export const SideButtonPanel = ({ panelState, options }) => {
  const [selectedPanel, setSelectedPanel] = panelState;

  return (
    <div className="col-span-1 block m-1 mt-1 text-xl text-center font-bold text-green-500">
      {Object.keys(options).map((k) => {
        return (
          <button
            key={k}
            className={
              "p-4 m-1 mt-0 rounded-md cursor-pointer w-full " +
              (selectedPanel === options[k]
                ? "bg-green-500 text-gray-900 hover:dark:bg-gray-900 hover:text-green-500"
                : "hover:bg-green-500 hover:text-gray-900 dark:bg-gray-900 text-green-500")
            }
            onClick={() => setSelectedPanel(options[k])}
          >
            {k}
          </button>
        );
      })}
    </div>
  );
};

export const SideButtonPanelV2 = ({ panelState, options, asLinks }) => {
  const [selectedPanel, setSelectedPanel] = panelState;
  const unusedButtons = [];

  for (let i = 0; i < 8 - (options?.length ?? 8); i++) {
    unusedButtons.push(
      <div
        className="flex bg-stripes-yellow"
        key={(asLinks ? "deadlink-" : "deadbutton-") + i}
      ></div>
    );
  }

  return (
    <div className="grid grid-rows-8 gap-y-1 border-2 border-yellow-500">
      {options.map((option) => {
        return asLinks ? (
          <Link
            key={option.state}
            to={"/" + option.state}
            className={
              "flex justify-center items-center bg-yellow-500 text-gray-900 font-extrabold mr-0 hover:mr-5 cursor-pointer text-xl font-mono uppercase" +
              (selectedPanel === options.state ? "" : "")
            }
            onClick={() => setSelectedPanel(option.state)}
          >
            {option.name}
          </Link>
        ) : (
          <button
            key={option.state}
            className={
              "flex justify-center items-center bg-yellow-500 text-gray-900 font-extrabold mr-0 hover:mr-5 cursor-pointer text-xl font-mono uppercase" +
              (selectedPanel === option.state ? "" : "")
            }
            onClick={() => setSelectedPanel(option.state)}
          >
            {option.name}
          </button>
        );
      })}
      {unusedButtons.map((unusedButton) => unusedButton)}
    </div>
  );
};
