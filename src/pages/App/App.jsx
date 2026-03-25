import React from 'react';
import { FaStar } from "react-icons/fa";

const App = ({ singleApp }) => {
    const { image, title, downloads, ratingAvg } = singleApp;

    return (
        <div className="bg-white rounded-xl p-3 hover:shadow-md transition duration-300">

            {/* Image */}
            <div className="bg-gray-200 rounded-lg h-40 flex items-center justify-center overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Title */}
            <h3 className="mt-3 text-sm font-medium text-gray-800 line-clamp-2">
                {title}
            </h3>

            {/* Bottom Info */}
            <div className="flex justify-between items-center mt-2 text-xs">

                {/* Downloads */}
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">
                    ⬇ {Math.floor(downloads / 1000000)}M
                </span>

                {/* Rating */}
                <span className="bg-orange-100 text-orange-500 px-2 py-1 rounded-md flex items-center gap-1">
                    <FaStar className="text-[10px]" />
                    {ratingAvg}
                </span>

            </div>
        </div>
    );
};

export default App;