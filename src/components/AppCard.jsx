import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`} className="border p-4">
      <img src={app.image} />
      <h2>{app.title}</h2>
      <p>Downloads: {app.downloads}</p>
      <p>⭐ {app.ratingAvg}</p>
    </Link>
  );
};

export default AppCard;