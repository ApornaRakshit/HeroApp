import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortType, setSortType] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledApps(data);
    }, []);

    const handleUninstall = (id) => {
        const updated = installedApps.filter(app => app.id !== id);
        setInstalledApps(updated);
        localStorage.setItem('installedApps', JSON.stringify(updated));
    };

    const handleSort = (type) => {
        setSortType(type);

        let sorted = [...installedApps];

        if (type === "size") {
            sorted.sort((a, b) => a.size - b.size);
        }
        else if (type === "size-desc") {
            sorted.sort((a, b) => b.size - a.size);
        }
        else if (type === "rating") {
            sorted.sort((a, b) => b.ratingAvg - a.ratingAvg);
        }

        setInstalledApps(sorted);
    };

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-2">
                Your Installed Apps
            </h2>
            <p className="text-center text-gray-500 mb-6">
                Explore All Trending Apps on the Market developed by us
            </p>
            <div className="flex justify-between items-center mb-4">

                <p className="font-semibold">
                    {installedApps.length} Apps Found
                </p>
                <select
                    value={sortType}
                    onChange={(e) => handleSort(e.target.value)}
                    className="border px-3 py-1 rounded-md text-sm"
                >
                    <option value="">Sort By</option>
                    <option value="size">Size (Small → Large)</option>
                    <option value="size-desc">Size (Large → Small)</option>
                    <option value="rating">Rating (High → Low)</option>
                </select>
            </div>
            <div className="space-y-4">
                {
                    installedApps.map(app => (
                        <div
                            key={app.id}
                            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
                        >
                            <div className="flex items-center gap-4">

                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />

                                <div>
                                    <h3 className="font-semibold">
                                        {app.title}
                                    </h3>

                                    <div className="text-sm text-gray-500 flex gap-4">
                                        <span className="text-green-600">
                                        <FiDownload /> {Math.floor(app.downloads / 1000000)}M
                                        </span>

                                        <span className="text-orange-500">
                                        <FaStar /> {app.ratingAvg}
                                        </span>

                                        <span>{app.size} MB</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => handleUninstall(app.id)}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Installation;