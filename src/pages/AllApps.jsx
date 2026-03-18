import { useEffect, useState, useMemo } from "react";
import debounce from "lodash.debounce";
import AppCard from "../components/AppCard";
import NoAppFound from "../components/NoAppFound";

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [loading, setLoading] = useState(true);



  // Load Data...........
  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setFilteredApps(data);
        setLoading(false);
      });
  }, []);



  //  Smart Search Function
  const handleSearch = (value) => {
    const result = apps.filter((app) =>
      app.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredApps(result);
  };

  

  const debouncedSearch = useMemo(() => debounce(handleSearch, 300), [apps]);

  useEffect(() => {
    if (!search.trim()) {
      setFilteredApps(apps);
      return;
    }
    debouncedSearch(search);

    return () => debouncedSearch.cancel();
  }, [search, apps, debouncedSearch]);




  return (
    <div className="px-6 py-10 space-y-10">
    
      <div className="text-center">
        <h1 className="text-3xl font-bold">All Apps</h1>
        <p className="text-gray-500">
          Discover and explore all available applications
        </p>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <h2 className="font-semibold">
          Total Apps: {filteredApps.length}
        </h2>

        <input
          type="text"
          placeholder="Search apps..."
          className="input input-bordered w-80"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/*  No App Found */}
      {filteredApps.length === 0 ? (
        <div>
          <p className="text-center text-gray-500 mb-4">
            No results found for "<span className="font-semibold">{search}</span>"
          </p>

          <NoAppFound />

          {/* Suggested Apps */}
          <div className="mt-10 px-10">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Suggested Apps
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {apps.slice(0, 4).map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;