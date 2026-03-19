import { useState } from "react";
import { useApp } from "../context/AppContext";
import { FaStar ,FaDownload} from "react-icons/fa";
import { toast } from "react-toastify";

const MyInstallation = () => {
  const { installedApps, uninstallApp } = useApp();
  const [sortOrder, setSortOrder] = useState("");

  // 🔥 Uninstall
  const handleUninstall = (id) => {
    uninstallApp(id);

    toast.info("App Uninstalled ❌", {
      position: "top-right",
      autoClose: 1500,
    });
  };

  // 🔥 Sorting
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "high-low") return b.downloads - a.downloads;
    if (sortOrder === "low-high") return a.downloads - b.downloads;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      {/* 🔥 Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* 🔥 Top Bar */}
      <div className="flex justify-between items-center max-w-5xl mx-auto mb-6">
        <h2 className="text-lg font-semibold">
          {installedApps.length} Apps Found
        </h2>

        {/* 🔽 Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-4 py-2 rounded-md bg-white shadow-sm"
        >
          <option value="">Sort By Downloads</option>
          <option value="high-low">High → Low</option>
          <option value="low-high">Low → High</option>
        </select>
      </div>

      {/* ❌ Empty */}
      {installedApps.length === 0 ? (
        <p className="text-center text-gray-500">No apps installed</p>
      ) : (
        <div className="space-y-4 max-w-5xl mx-auto">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
            >
              {/* 🔥 Left Side */}
              <div className="flex items-center gap-4">
                {/* 🖼️ Image */}
                <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <h2 className="font-semibold text-lg">
                    {app.title}
                  </h2>

                  <div className="flex items-center gap-4 text-sm mt-1 text-gray-500">
                    {/* Downloads */}
                    
                    <span className="text-green-500 flex gap-2 font-medium">
                      <FaDownload className="text-green-500 mx-auto text-xl" />{Math.floor(app.downloads / 100000)}M
                    </span>

                    {/* Rating */}
                    <span className="flex items-center gap-1 text-orange-500">
                      <FaStar /> {app.ratingAvg}
                    </span>

                    {/* Size */}
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>

              {/* 🔥 Uninstall Button */}
              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md"
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