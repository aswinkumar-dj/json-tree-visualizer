import React from "react";
import JsonInputBox from "./JsonInputBox";

const InputCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-250 h-150 mx-10 my-20 p-10 bg-gray-900 rounded-xl shadow-2xl ">
        <JsonInputBox />
      </div>
    </div>
  );
};

export default InputCard;
