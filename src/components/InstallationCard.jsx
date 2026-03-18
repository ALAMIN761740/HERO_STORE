import { FaDownload, FaStar } from "react-icons/fa";

const InstallationCard = ({ title, description, image, downloads, rating }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="h-36 w-full object-cover rounded-md mb-3"
        />
      )}

      {/* Title & Description */}
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-500 text-sm mb-3">{description}</p>

      {/* Stats */}
      <div className="flex justify-between items-center text-sm mt-2">
        {downloads !== undefined && (
          <span className="flex items-center gap-1 text-green-500">
            <FaDownload /> {downloads}M
          </span>
        )}
        {rating !== undefined && (
          <span className="flex items-center gap-1 text-orange-500">
            <FaStar /> {rating}
          </span>
        )}
      </div>
    </div>
  );
};

export default InstallationCard;