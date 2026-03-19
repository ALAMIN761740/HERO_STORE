import { createContext, useContext, useEffect, useState } from "react";
import appsData from "./../../public/apps.json";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [apps] = useState(appsData);

  // 🔥 Load from localStorage
  const [installedApps, setInstalledApps] = useState(() => {
    const stored = localStorage.getItem("installedApps");
    return stored ? JSON.parse(stored) : [];
  });

  // 🔥 Auto save to localStorage (whenever installedApps changes)
  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  // ✅ Install App
  const installApp = (app) => {
    const exists = installedApps.find((a) => a.id === app.id);

    if (exists) return; // prevent duplicate

    setInstalledApps((prev) => [...prev, app]);
  };

  // ❌ Uninstall App
  const uninstallApp = (id) => {
    setInstalledApps((prev) => prev.filter((app) => app.id !== id));
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