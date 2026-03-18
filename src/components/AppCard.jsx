import { FaMobileAlt, FaDownload, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const AppCard = ({ app }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/apps/${app.id}`)}
      className="bg-white w-60 h-60 flex flex-col items-center justify-between p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer border border-gray-100"
    >
      {/* Image/Icon */}
      <div className="w-24 h-24 mb-3">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Title and Company */}
      <div className="text-center">
        <h3 className="font-semibold text-sm">{app.title}</h3>
        <p className="text-xs text-gray-500">{app.companyName}</p>
      </div>

      {/* Downloads & Rating */}
      <div className="flex justify-between w-full mt-2 text-xs">
        <span className="flex items-center gap-1 text-green-500">
          <FaDownload /> {Math.floor(app.downloads / 100000)}M
        </span>
        <span className="flex items-center gap-1 text-orange-500">
          <FaStar /> {app.ratingAvg}
        </span>
      </div>
    </div>
  );
};

export default AppCard;