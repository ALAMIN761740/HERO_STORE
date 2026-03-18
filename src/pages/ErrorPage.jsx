import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      <p className="text-2xl mt-4 font-semibold">Page Not Found</p>
      <p className="text-gray-500 mt-2">
        Oops! The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow hover:scale-105 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;