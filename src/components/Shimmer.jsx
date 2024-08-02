import React from 'react';

const Shimmer = () => {
  return (
    <div className="relative p-4 bg-gray-200 animate-pulse">
      <div className="h-60 bg-gray-300 rounded-lg"></div>
      <div className="mt-4">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="mt-2 h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default Shimmer;
