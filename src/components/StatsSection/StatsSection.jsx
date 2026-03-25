import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-14 px-4 ">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Trusted By Millions, Built For You
      </h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
        <div>
          <p className="text-sm text-gray-200">Total Downloads</p>
          <h3 className="text-4xl font-bold mt-2">29.6M</h3>
          <p className="text-sm text-gray-200 mt-2">
            21% More Than Last Month
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-200">Total Reviews</p>
          <h3 className="text-4xl font-bold mt-2">906K</h3>
          <p className="text-sm text-gray-200 mt-2">
            46% More Than Last Month
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-200">Active Apps</p>
          <h3 className="text-4xl font-bold mt-2">132+</h3>
          <p className="text-sm text-gray-200 mt-2">
            31 More Will Launch
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;