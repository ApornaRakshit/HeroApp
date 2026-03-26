import React from "react";
import { Link } from "react-router";
import errorImg from "../../assets/error-404.png";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col ">
            <Navbar></Navbar>

            <div className="flex-grow flex items-center justify-center px-4 py-4">
                <div className="bg-white w-full max-w-4xl text-center rounded-lg shadow-md p-10">
                    <img
                        src={errorImg}
                        alt="404 Error"
                        className="mx-auto w-full max-w-sm mb-6"
                    />
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Oops, page not found!
                    </h1>
                    <p className="text-gray-500 mt-2 mb-6">
                        The page you are looking for is not available.
                    </p>
                    <Link to="/">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;