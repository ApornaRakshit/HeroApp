import { useLoaderData, useParams } from "react-router";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";

const AppDetails = () => {
    const loaderData = useLoaderData();
    const { id } = useParams();

    const [app, setApp] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const found = loaderData.find(app => app.id === parseInt(id));
        setApp(found);
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        const exists = installedApps.find(item => item.id === parseInt(id));
        setIsInstalled(!!exists);
    }, [id, loaderData]);

    if (!app) return <p className="text-center mt-10">Loading...</p>;
    const handleInstall = () => {
        const existing = JSON.parse(localStorage.getItem('installedApps')) || [];

        const alreadyInstalled = existing.find(item => item.id === app.id);

        if (!alreadyInstalled) {
            const updated = [...existing, app];
            localStorage.setItem('installedApps', JSON.stringify(updated));
            setIsInstalled(true);
            alert("App Installed ✅");
        }
    };

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img
                    src={app.image}
                    className="w-40 h-40 rounded-lg object-cover"
                />
                <div className="flex-1">
                    <h2 className="text-2xl font-bold">{app.title}</h2>

                    <p className="text-gray-500 mb-4">
                        Developed by <span className="text-purple-600">{app.companyName}</span>
                    </p>
                    <div className="flex gap-8 mb-4 text-center">
                        <div>
                            <p className="text-green-600 text-xl"><FiDownload /></p>
                            <p className="text-sm text-gray-500">Downloads</p>
                            <p className="font-bold">
                                {Math.floor(app.downloads / 1000000)}M
                            </p>
                        </div>
                        <div>
                            <p className="text-orange-500 text-xl"><FaStar /></p>
                            <p className="text-sm text-gray-500">Average Ratings</p>
                            <p className="font-bold">{app.ratingAvg}</p>
                        </div>
                        <div>
                            <p className="text-purple-500 text-xl"><MdRateReview /></p>
                            <p className="text-sm text-gray-500">Total Reviews</p>
                            <p className="font-bold">{app.reviews}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleInstall}
                        disabled={isInstalled}
                        className={`px-6 py-2 rounded-lg text-white transition ${isInstalled
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-500 hover:bg-green-600"
                            }`}
                    >
                        {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
                    </button>
                </div>
            </div>
            <hr className="my-8" />
            <div>
                <h3 className="font-semibold mb-4">Ratings</h3>
                <div className="space-y-2">
                    {[...app.ratings].reverse().map((rating, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <span className="w-12 text-sm">
                                {rating.name}
                            </span>
                            <div className="flex-1 bg-gray-200 h-3 rounded">
                                <div
                                    className="bg-orange-500 h-3 rounded"
                                    style={{
                                        width: `${(rating.count / app.reviews) * 100}%`
                                    }}
                                >
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-8">
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                    {app.description}
                </p>
            </div>
        </div>
    );
};

export default AppDetails;