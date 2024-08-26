import { useState } from "react";
import { SideButtonPanel } from "./SideButtonPanel";

export const InformationPanels = ({ panelOptions, delegatedRender }) => {
  const panelNames = Object.keys(panelOptions);
  const [panelState, setPanelState] = useState(panelNames[0]);

  return (
    <div className="grid grid-cols-5">
      <SideButtonPanel
        panelState={[panelState, setPanelState]}
        options={panelOptions}
        className="col-span-1"
      />

      <div className="col-span-4 mx-2">{delegatedRender(panelState)}</div>
    </div>
  );
};
