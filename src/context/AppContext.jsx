import { createContext, useContext, useState } from "react";
import appsData from "./../../public/apps.json";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [apps] = useState(appsData);
  const [installedApps, setInstalledApps] = useState([]);

  const installApp = (app) => {
    const exists = installedApps.find((a) => a.id === app.id);
    if (!exists) {
      setInstalledApps([...installedApps, app]);
    }
  };

  const uninstallApp = (id) => {
    setInstalledApps(installedApps.filter((app) => app.id !== id));
  };

  return (
    <AppContext.Provider
      value={{ apps, installedApps, installApp, uninstallApp }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);