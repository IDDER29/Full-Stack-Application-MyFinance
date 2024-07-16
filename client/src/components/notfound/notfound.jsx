// NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-800">404</h1>
                <p className="text-2xl text-gray-600 mt-4">Oops! Page not found.</p>
                <p className="text-gray-500 mt-2">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link to="/" className="mt-8 inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-md transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
