import { createContext } from "react";
import { config } from "../utils/config";

export const ConfigContext = createContext(config);

export const ConfigProvider = ({ children }) => {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};
