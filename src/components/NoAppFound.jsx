
import { useNavigate } from "react-router";

const NoAppFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      
      <img
        src="./../../assets/App-Error.png"
        alt="No App Found"
        className="w-72 md:w-96 mb-6"
      />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        OPPS!! APP NOT FOUND
      </h1>
      
      <p className="text-gray-500 max-w-md mb-6">
        The App you are requesting is not found on our system. Please try another apps
      </p>
      
      <button
        onClick={() => navigate("/")}
        className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600"
      >
        Go Back!
      </button>
    </div>
  );
};

export default NoAppFound;