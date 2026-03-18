import heroImg from "./../../assets/hero.png";
import {
  FaGooglePlay,
  FaApple,
  FaDownload,
  FaStar,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import AppCard from "../components/AppCard";



const Home = () => {


  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/apps.json")
      .then(res => res.json())
      .then(data => {
        const trendingApps = data.filter(app => app.type === "trending");
        setApps(trendingApps.slice(0,8)); // first 8
      });
  }, []);


  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="text-center px-4 bg-gray-50">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          We Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
            Productive
          </span>{" "}
          Apps
        </h1>

        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          At HERO.STORE, we craft innovative apps designed to make everyday life
          simpler. Our apps focus on usability and performance to save you time.
          Discover tools that help you stay productive every day.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <Link to="https://play.google.com/store/games?hl=en">
            <button className="flex items-center gap-2 px-5 py-2 border rounded-lg shadow-sm hover:bg-gray-100">
              <FaGooglePlay /> Google Play
            </button>
          </Link>
          <Link to="https://www.apple.com/app-store/">
            <button className="flex items-center gap-2 px-5 py-2 border rounded-lg shadow-sm hover:bg-gray-100">
              <FaApple /> App Store
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center mt-10 relative">
          <img src={heroImg} alt="hero" className="w-[300px] md:w-[600px]" />
        </div>

      </section>





      {/* ================= STATS ================= */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid md:grid-cols-3 text-center gap-6 max-w-5xl mx-auto">
          <div>
            <p className="text-sm mb-4 flex justify-center items-center gap-1">Total Downloads</p>
            <h3 className="text-5xl font-bold">29.6M</h3>
            <p className="text-sm mt-5 flex justify-center items-center gap-1">
               21% more than last month
            </p>
          </div>

          <div>
            <p className="text-sm mb-4 flex justify-center items-center gap-1">Total Reviews</p>
            <h3 className="text-5xl font-bold">906K</h3>
            <p className="text-sm mt-5 flex justify-center items-center gap-1">
               46% more than last month
            </p>
          </div>

          <div>
            <p className="text-sm mb-4 flex justify-center items-center gap-1">Active Apps</p>
            <h3 className="text-5xl font-bold">132+</h3>
            <p className="text-sm mt-5 flex justify-center items-center gap-1">
              31 more will Launch
            </p>
          </div>
        </div>
      </section>




      {/* ================= TRENDING ================= */}
       <section className="py-14 px-4 bg-gray-50">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Trending Apps
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>


        <div className="grid md:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>


        <div className="text-center mt-10">
          <Link to="/apps">
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg">
              Show All
            </button>
          </Link>
        </div>

       </section>


    </div>
  );
};

export default Home;