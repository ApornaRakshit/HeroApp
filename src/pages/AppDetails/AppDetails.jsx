import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const app = data.find(app => app.id == id);

    if (!app) return <h2>App not found</h2>;

    const {
        title,
        image,
        downloads,
        ratingAvg,
        reviews,
        size,
        companyName,
        description,
        ratings
    } = app;

    const maxRating = Math.max(...ratings.map(r => r.count));

    return (
        <div className="max-w-6xl mx-auto p-6">

            {/* Top Section */}
            <div className="flex gap-6 items-center border-b pb-6">
                <img src={image} className="w-60 h-60 rounded-lg" />

                <div>
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <p className="text-sm text-gray-500">
                        Developed by <span className="text-blue-500">{companyName}</span>
                    </p>

                    <div className="flex gap-16 mt-4">

                        <div>
                            <p className="text-green-600">⬇</p>
                            <p className="text-lg">Downloads</p>
                            <h4 className="font-bold">
                                {Math.floor(downloads / 1000000)}M
                            </h4>
                        </div>

                        <div>
                            <p className="text-orange-500">⭐</p>
                            <p className="text-lg">Rating</p>
                            <h4 className="font-bold">{ratingAvg}</h4>
                        </div>

                        <div>
                            <p className="text-purple-500">💬</p>
                            <p className="text-lg">Reviews</p>
                            <h4 className="font-bold">{reviews}</h4>
                        </div>

                    </div>

                    <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Install Now ({size} MB)
                    </button>
                </div>
            </div>

            {/* Ratings */}
            <div className="mt-6">
                <h3 className="font-bold text-2xl mb-3">Ratings</h3>

                {
                    ratings.slice().reverse().map((r, index) => (
                        <div key={index} className="flex items-center gap-3 mb-2">
                            <span className="w-12 text-sm">{r.name}</span>

                            <div className="w-full bg-gray-200 h-3 rounded">
                                <div
                                    className="bg-orange-500 h-3 rounded"
                                    style={{
                                        width: `${(r.count / maxRating) * 100}%`
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Description */}
            <div className="mt-6">
                <h3 className="font-bold text-2xl mb-2">Description</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                </p>
            </div>

        </div>
    );
};

export default AppDetails;