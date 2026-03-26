import React, { useEffect, useState } from 'react';
import App from '../App/App';
import { CiSearch } from "react-icons/ci";
import appError from '../../assets/App-Error.png'
import { Link } from 'react-router';

const Apps = () => {
    const [apps, setApps] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch('/appData.json')
            .then(res => res.json())
            .then(data => setApps(data));
    }, []);
    const filteredApps = apps.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-2">
                Our All Applications
            </h2>
            <p className="text-center text-gray-500 mb-6">
                Explore All Apps on the Market developed by us
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">

                <p className="font-semibold">
                    ({filteredApps.length}) Apps Found
                </p>

                <div className="flex items-center gap-2 border px-3 py-2 rounded-md w-full sm:max-w-xs">
                    <CiSearch className="text-gray-400 text-lg" />
                    <input
                        type="text"
                        placeholder="Search Apps"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full outline-none text-sm"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {
                    filteredApps.length === 0 ? (
                        <div className="col-span-full text-center py-20">
                            <img className='mx-auto' src={appError} alt="" />
                            <h2 className="text-2xl font-bold text-gray-700">
                                OPPS!! APP NOT FOUND
                            </h2>
                            <p className="text-gray-500 mt-2">
                                The App you are requesting is not found on our system.  please try another apps
                            </p>
                            <Link to="/">
                                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
                                    Go Back
                                </button>
                            </Link>
                        </div>
                    ) : (
                        filteredApps.map(app => (
                            <App key={app.id} singleApp={app} />
                        ))
                    )
                }

            </div>
        </div>
    );
};

export default Apps;