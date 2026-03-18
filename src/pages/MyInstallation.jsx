import { useApp } from "../context/AppContext";
import { FaMobileAlt } from "react-icons/fa";

const MyInstallation = () => {
  const { installedApps, uninstallApp } = useApp();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Your Installed Apps
      </h1>

      {installedApps.length === 0 ? (
        <p className="text-center text-gray-500">No apps installed</p>
      ) : (
        <div className="space-y-4 max-w-3xl mx-auto">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="flex justify-between items-center bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <FaMobileAlt className="text-2xl text-blue-500" />
                <div>
                  <h2 className="font-semibold">{app.title}</h2>
                  <p className="text-sm text-gray-500">
                    {app.size} MB
                  </p>
                </div>
              </div>

              <button
                onClick={() => uninstallApp(app.id)}
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInstallation;