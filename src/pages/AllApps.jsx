import { useEffect, useState } from "react";
import AppCard from "../components/AppCard";

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // 📦 Load Data (FIXED)
  useEffect(() => {
    fetch("/apps.json")
      .then((res) => {
        // 🔥 DEBUG
        console.log("Status:", res.status);

        if (!res.ok) {
          throw new Error("JSON load failed");
        }

        return res.json();
      })
      .then((data) => {
        console.log("DATA:", data); // 🔥 check console
        setApps(data);
        setFilteredApps(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("ERROR:", error);
        setLoading(false);
      });
  }, []);

  // 🔍 Live Search
  useEffect(() => {
    const result = apps.filter((app) =>
      app.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredApps(result);
  }, [search, apps]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="px-6 py-10 space-y-10">
      {/* 🧾 Title Section */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">All Apps</h1>
        <p className="text-gray-500">
          Discover and explore all available applications
        </p>
      </div>

      {/* 🔍 Search + Count */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-lg font-semibold">
          Total Apps: {filteredApps.length}
        </h2>

        <input
          type="text"
          placeholder="Search apps..."
          className="input input-bordered w-full md:w-80"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ❌ No App Found */}
      {filteredApps.length === 0 ? (
        <div className="text-center text-red-500 text-xl py-20">
          No App Found 😢
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;