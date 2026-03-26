import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';

const Apps = () => {
    const data = useLoaderData();

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-4'>
            {
                data.map(app => (
                    <App key={app.id} singleApp={app} />
                ))
            }
        </div>
    );
};

export default Apps;