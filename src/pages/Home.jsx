import { useEffect, useState } from "react";
import AppCard from "../components/AppCard";

const Home = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      });
  }, []);

  // Top 8 apps
  const topApps = apps.slice(0, 8);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="space-y-16">
      
      {/* 🔥 Banner Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Amazing Apps
        </h1>
        <p className="mb-6 text-lg">
          Find, install and manage your favorite apps easily 🚀
        </p>

        <div className="space-x-4">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            className="btn bg-white text-black"
          >
            App Store
          </a>

          <a
            href="https://play.google.com/"
            target="_blank"
            className="btn bg-black text-white"
          >
            Play Store
          </a>
        </div>
      </section>

      {/* 📊 Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        <div className="p-6 shadow rounded-xl text-center">
          <h2 className="text-3xl font-bold">{apps.length}+</h2>
          <p>Total Apps</p>
        </div>

        <div className="p-6 shadow rounded-xl text-center">
          <h2 className="text-3xl font-bold">
            {apps.reduce((acc, app) => acc + app.downloads, 0)}
          </h2>
          <p>Total Downloads</p>
        </div>

        <div className="p-6 shadow rounded-xl text-center">
          <h2 className="text-3xl font-bold">4.5⭐</h2>
          <p>Average Rating</p>
        </div>
      </section>

      {/* 📱 Top Apps Section */}
      <section className="px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Top Apps</h2>

          <a href="/apps" className="btn btn-outline">
            Show All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;