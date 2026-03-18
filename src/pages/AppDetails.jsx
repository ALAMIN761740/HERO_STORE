import { useParams } from "react-router";
import { useApp } from "../context/AppContext";
import {
  FaDownload,
  FaStar,
  FaThumbsUp,
  FaMobileAlt,
} from "react-icons/fa";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, installApp, installedApps } = useApp();

  const app = apps.find((a) => a.id === parseInt(id));
  const isInstalled = installedApps.find((a) => a.id === app?.id);

  if (!app) {
    return <p className="text-center mt-10">App not found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Icon */}
        <div className="bg-gray-100 h-60 flex items-center justify-center rounded">
          <FaMobileAlt className="text-7xl text-blue-500" />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-gray-500 mt-1">
            Developed by <span className="text-blue-500">{app.companyName}</span>
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-6">
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

          {/* Install Button */}
          <button
            onClick={() => installApp(app)}
            disabled={isInstalled}
            className={`mt-6 px-6 py-2 rounded text-white ${
              isInstalled ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isInstalled
              ? "Installed"
              : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="mt-10">
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

      {/* Description */}
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