import React from "react";

const Overview = () => {
  return (
    <div className="mt-40 flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-7xl font-extrabold bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-xl">
        JSON Tree Visualizer
      </h1>
      <p className="max-w-2xl text-lg text-gray-300 mt-4 leading-relaxed">
        It is an interactive tool that allows users to paste JSON data and view
        it as a structured, expandable tree. It helps developers clearly explore
        nested data and debug JSON easily.
      </p>
    </div>
  );
};

export default Overview;
