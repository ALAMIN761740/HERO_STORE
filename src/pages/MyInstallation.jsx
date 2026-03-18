


const MyInstallation = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        My Installations
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Project One</h2>
          <p className="text-gray-500">
            This is a demo installation project.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Project Two</h2>
          <p className="text-gray-500">
            Another installation example.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Project Three</h2>
          <p className="text-gray-500">
            More installations listed here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyInstallation;