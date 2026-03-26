import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../assets/notfound.png"; // your image path

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-white">

      {/* Image */}
      <img
        src={notFoundImg}
        alt="Not Found"
        className="w-full max-w-md mb-6"
      />

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        OPPS!! APP NOT FOUND
      </h1>

      {/* Description */}
      <p className="text-gray-500 mt-2 mb-6 max-w-md">
        The App you are requesting is not found in our system, please try another apps
      </p>

      {/* Button */}
      <Link to="/">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
          Go Back
        </button>
      </Link>

    </div>
  );
};

export default NotFound;