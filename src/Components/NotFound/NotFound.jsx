import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-light-blue text-lighter-black text-center px-6">
      <h1 className="text-6xl font-bold text-dark-blue mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-dark-blue text-white px-6 py-3 rounded-md hover:bg-lighter-black transition">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
