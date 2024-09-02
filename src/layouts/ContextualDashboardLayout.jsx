import { useState } from "react";
import { SideButtonPanelV2 } from "@components/SideButtonPanel";
import { GraphicSidePanel } from "@components/GraphicSidePanel";

const globalRouting = [
  {
    name: "Home",
    state: "home",
    tooltip: "Return to the home screen",
  },
  {
    name: "Characters",
    state: "characters/roster",
    tooltip: "Review your characters",
  },
  {
    name: "Fleet Management",
    state: "ships/fleet",
    tooltip: "Manage your fleet of ships",
  },
  {
    name: "Journal",
    state: "journal",
    tooltip: "It's best to remember what happened last session",
  },
];

export const ActionButtons = [
  {
    name: "Roll d4",
    func: () => console.log(4),
    tooltip: "Roll a d4",
  },
  {
    name: "Roll d6",
    func: () => console.log(6),
    tooltip: "Roll a d6",
  },
  {
    name: "Roll d8",
    func: () => console.log(8),
    tooltip: "Roll a d8",
  },
  {
    name: "Roll d10",
    func: () => console.log(10),
    tooltip: "Roll a d10",
  },
  {
    name: "Roll d12",
    func: () => console.log(12),
    tooltip: "Roll a d12",
  },
  {
    name: "Roll d20",
    func: () => console.log(20),
    tooltip: "Roll a d20",
  },
];

export const PrimaryPanel = () => {
  return <div className=""></div>;
};

export const ActionPanel = ({ buttons }) => {
  return (
    <div className="grid grid-flow-col text-yellow-500 items-center text-center font-bold">
      {buttons.length > 0 ? (
        buttons.map((b) => {
          return (
            <button
              onClick={() => b.func}
              key={b.name}
              className="grid-cols-1 "
            >
              {b.name}
            </button>
          );
        })
      ) : (
        <div className="flex justify-center items-center  ">No buttons</div>
      )}
    </div>
  );
};

export const ContextualDashboardLayout = ({
  primaryPanel,
  sidePanel,
  startingPanel,
  contextualNavigation,
  actionBar,
}) => {
  const routingPanelState = useState(globalRouting.Home);
  const contextualPanelState = useState(
    startingPanel || contextualNavigation[0]?.state
  );
  const [showRoutingButtons, setShowRoutingButtons] = useState(true);

  return (
    <div className="flex flex-grow">
      <div className="grid grid-cols-3 w-full">
        <div className="grid col-span-2 row-span-3 border-2 border-yellow-500 ml-4 mr-1 mt-2 overflow-none relative bg-gray-950">
          {primaryPanel(contextualPanelState[0])}
        </div>
        <div className="grid col-span-1 row-span-2  uppercase mt-2 mr-4">
          <div className="grid row-span-1 grid-cols-3 border-2 border-yellow-500">
            <div className="col-span-2 block p-0 text-yellow-500 relative">
              <div className="absolute w-full text-center">
                {showRoutingButtons
                  ? "Global Navigation"
                  : "Contextual Navigation"}
              </div>
            </div>
            <button
              className="col-span-1 bg-yellow-500 block p-0 disabled:opacity-90"
              onClick={() => setShowRoutingButtons(!showRoutingButtons)}
              disabled={Object.keys(contextualNavigation).length == 0}
            >
              <div className="-m-3 font-mono font-bold uppercase">
                Toggle Mode
              </div>
            </button>
          </div>
          <div className="grid row-span-9">
            {showRoutingButtons ? (
              <SideButtonPanelV2
                panelState={routingPanelState}
                options={globalRouting}
                asLinks={true}
                key="global-nav"
              />
            ) : (
              <SideButtonPanelV2
                panelState={contextualPanelState}
                options={contextualNavigation}
                asLinks={false}
                key="contextual-nav"
              />
            )}
          </div>
        </div>
        <div className="grid mr-4 mt-1 col-span-1 row-span-1 border-yellow-500 border-2">
          {sidePanel ? (
            sidePanel(contextualPanelState[0])
          ) : (
            <GraphicSidePanel />
          )}
        </div>
        <div className="grid mx-4 mt-1 col-span-3 row-span-1 border-2 border-yellow-500">
          <ActionPanel buttons={actionBar} />
        </div>
      </div>
    </div>
  );
};
