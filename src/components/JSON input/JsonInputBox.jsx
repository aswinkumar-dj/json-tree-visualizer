import React from "react";

const JsonInputBox = () => {
  return (
    <div>
      <textarea
        placeholder="Paste your JSON here..."
        className="w-full h-100 bg-gray-800 text-white p-4 rounded-xl resize-none leading-tight placeholder:text-gray-400 focus:outline-blue-500"
      ></textarea>

      <div className="py-10 flex justify-around items-center">
        <button className="bg-linear-to-r w-70 from-purple-500 to-blue-500 text-white text-xl px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-blue-600 hover:to-blue-600">
          Visualize JSON
        </button>

        <button className="relative text-white text-xl font-medium group">
          Load Sample Data
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </div>
  );
};

export default JsonInputBox;
