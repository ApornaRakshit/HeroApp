import React from 'react';
import App from '../App/App';

const Apps = ({ data }) => {
    return (
        <div className='text-center mt-10 mb-6 px-4'>

            {/* Title */}
            <h1 className='text-3xl md:text-4xl font-bold mb-2'>
                Trending Apps
            </h1>

            <p className='text-gray-500 mb-8'>
                Explore all trending apps developed by us
            </p>

            {/* Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-7xl mx-auto'>
                {
                    data.map((singleApp) => (
                        <App key={singleApp.id} singleApp={singleApp} />
                    ))
                }
            </div>

        </div>
    );
};

export default Apps;