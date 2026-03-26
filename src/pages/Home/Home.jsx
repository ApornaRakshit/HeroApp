import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import heroImg from '../../assets/hero.png';
import StatsSection from '../../components/StatsSection/StatsSection';
import App from '../App/App';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";

const Home = () => {
    const data = useLoaderData();
    const trendingApps = [...data]
        .sort((a, b) => b.downloads - a.downloads)
        .slice(0, 8);
    return (
        <div>
            <div className='text-center py-14'>
                <h1 className='text-5xl font-bold'>
                    We Build <br />
                    <span className='bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent'>
                        Productive
                    </span> Apps
                </h1>
                <p className='pt-5 text-gray-400'>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler,
                    smarter, and more exciting.
                </p>
                <div className="flex justify-center gap-4 mt-6">
                    <button onClick={() =>
                        window.open("https://play.google.com/store/apps/details?id=com.whatsapp")}
                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md">
                        <FaGooglePlay /> GooglePlay
                    </button>
                    <button onClick={() =>
                        window.open("https://www.apple.com/app-store/")}
                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md">
                        <FaAppStoreIos /> AppStore
                    </button>
                </div>
            </div>
            <div className="px-4 sm:px-6 md:px-10">
                <img src={heroImg} alt="" className='mx-auto w-full max-w-3xl' />
            </div>
            <StatsSection />
            <div className="mt-12">
                <h2 className="text-3xl font-bold text-center mb-2">
                    Trending Apps
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Explore All Trending Apps on the Market developed by us
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                    {
                        trendingApps.map(app => (
                            <App key={app.id} singleApp={app} />
                        ))
                    }
                </div>
                <div className="text-center mt-8 mb-8">
                    <Link to="/app">
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                            Show All
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;