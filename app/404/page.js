import React from 'react';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-2">Page Not Found</p>
      <p className="text-sm mb-6 text-gray-500">Sorry, the page you are looking for does not exist.</p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Go Home
      </a>
    </div>
  );
};

export default PageNotFound;
