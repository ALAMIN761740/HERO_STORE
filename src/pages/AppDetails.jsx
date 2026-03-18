import { useParams } from "react-router";
import { useApp } from "../context/AppContext";
import {
  FaDownload,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, installApp, uninstallApp, installedApps } = useApp();

  const app = apps.find((a) => a.id === parseInt(id));
  const isInstalled = installedApps.find((a) => a.id === app?.id);

  // ❌ App না থাকলে
  if (!app) {
    return <p className="text-center mt-10">App not found</p>;
  }

  // 🔥 Install Handler
  const handleInstall = () => {
    installApp(app);

    toast.success("Installing app...", {
      position: "top-right",
      autoClose: 1500,
    });

    setTimeout(() => {
      toast.success("App Installed Successfully ✅");
    }, 1500);
  };

  // 🔥 Uninstall Handler
  const handleUninstall = () => {
    uninstallApp(app.id);

    toast.info("App Uninstalled ❌", {
      position: "top-right",
      autoClose: 1500,
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-2 items-center border-b pb-4">

        {/* 🖼️ Image 1:1 */}
        <div className="w-full max-w-xs aspect-square bg-gray-100 flex items-center justify-center rounded overflow-hidden">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="md:col-span-2  ">
          <div className="border-b pb-4">
            <h1 className="text-3xl font-bold">{app.title}</h1>
            <p className="text-gray-500 mt-1">
              Developed by{" "}
              <span className="text-blue-500">{app.companyName}</span>
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-6 justify-center md:justify-start">
            <div className="text-center">
              <FaDownload className="text-green-500 mx-auto text-xl" />
              <p className="text-sm text-gray-500 mt-1">Downloads</p>
              <p className="font-bold text-lg">
                {Math.floor(app.downloads / 100000)}M
              </p>
            </div>

            <div className="text-center">
              <FaStar className="text-orange-500 mx-auto text-xl" />
              <p className="text-sm text-gray-500 mt-1">Average Ratings</p>
              <p className="font-bold text-lg">{app.ratingAvg}</p>
            </div>

            <div className="text-center">
              <FaThumbsUp className="text-purple-500 mx-auto text-xl" />
              <p className="text-sm text-gray-500 mt-1">Total Reviews</p>
              <p className="font-bold text-lg">
                {app.reviews > 1000
                  ? (app.reviews / 1000).toFixed(1) + "K"
                  : app.reviews}
              </p>
            </div>
          </div>

          {/* 🔘 Install / Uninstall Button */}
          <button
            onClick={isInstalled ? handleUninstall : handleInstall}
            className={`mt-6 px-6 py-2 rounded text-white transition ${
              isInstalled
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isInstalled
              ? "Uninstall"
              : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* ⭐ Ratings */}
      <div className="mt-4 border-b pb-4">
        <h2 className="text-xl font-semibold mb-4">Ratings</h2>

        {app.ratings?.length > 0 ? (
          app.ratings
            .slice()
            .reverse()
            .map((rating, index) => (
              <div key={index} className="flex items-center gap-4 mb-2">
                <span className="w-12 text-sm">{rating.name}</span>

                <div className="flex-1 bg-gray-200 h-3 rounded">
                  <div
                    className="bg-orange-500 h-3 rounded"
                    style={{
                      width: `${
                        (rating.count /
                          Math.max(...app.ratings.map((r) => r.count))) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            ))
        ) : (
          <p className="text-gray-500">No ratings available</p>
        )}
      </div>

      {/* 📄 Description */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p className="text-gray-600 leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;