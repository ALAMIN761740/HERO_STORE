import { Link } from "react-router";
import errorImg from "./../../assets/error-404.png"; 


const ErrorPage = () => {
  return (
    <div className="  flex flex-col min-h-screen bg-[#f8fafc]">
      
      <div className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <img
          src={errorImg}
          alt="404 Error"
          className="w-[300px] md:w-[300px] mb-6"
        />

        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Oops, page not found!
        </h1>

        <p className="text-gray-500 mt-3 max-w-md">
          The page you are looking for is not available.
        </p>

        <Link
          to="/"
          className="mt-6 px-6 py-3 rounded-lg text-white font-medium
          bg-gradient-to-r from-[#6C3BFF] to-[#9F62F2]
          hover:scale-105 transition duration-300 shadow-lg"
        >
          Go Back!
        </Link>
      </div>
      
    </div>
  );
};

export default ErrorPage;