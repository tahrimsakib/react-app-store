import { Download, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Loading from "../../Component/Loading";

const App = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setIsLoading(true);
  };

  useEffect(() => {
    const normalized = searchTerm.trim().toLowerCase();

    if (normalized === "") {
      setFilteredApps(data);
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      const matched = data.filter((app) =>
        app.title.toLowerCase().includes(normalized)
      );
      setFilteredApps(matched);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, data]);

  return (
    <div className="bg-[#f5f5f5] min-h-screen w-screen">
      <div className="max-w-11/12 mx-auto py-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#001931] flex justify-center pt-2">
            Our All Applications
          </h1>
          <p className="text-[#627382] text-center my-3 text-[15px] md:text-[17px] flex justify-center mt-2 mb-10">
            Explore all our applications and find the ones that fit your needs
            best.
          </p>
        </div>

        <div className="flex justify-between items-center my-5">
          <h1 className=" text-[15px] md:text-xl font-semibold text-[#001931]">
            {isLoading ? "Searching..." : `(${filteredApps.length}) Apps Found`}
          </h1>

          <label className="max-w-48 md:max-w-65 input flex items-center gap-2 bg-white px-3 py-1 rounded-md shadow-sm">
            <input
              type="search"
              className="grow outline-none text-sm"
              placeholder="Search App"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </label>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredApps.length > 0 ? (
              filteredApps.map((singleApp) => {
                const { id, title, image, ratingAvg, downloads } = singleApp;
                return (
                  <Link key={id} to={`/app/appdetails/${id}`}>
                    <div
                      key={id}
                      className="bg-white p-3 shadow-xl rounded-lg w-fit transition hover:scale-[1.02] duration-200"
                    >
                      <img
                        src={image}
                        alt={title}
                        className="w-[250px] object-contain rounded-md"
                      />
                      <h1 className="mt-2 font-semibold">{title}</h1>
                      <div className="my-2.5 flex justify-between items-center text-[14px]">
                        <p className="flex justify-center items-center gap-1.5 bg-[#f1f5e8] py-0.5 text-green-500 font-semibold px-2 rounded-[4px]">
                          <Download className="w-4" /> {downloads}
                        </p>

                        <p className="flex justify-center items-center gap-1.5 items-center py-0.5 bg-[#fff0e1] text-orange-500 font-semibold px-2 rounded-[4px]">
                          <Star size={16} strokeWidth={2} />
                          {ratingAvg}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <h1 className="text-center text-4xl md:text-6xl font-bold text-gray-500 col-span-full mt-20">
                No apps found
              </h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
