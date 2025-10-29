import React from "react";
import { Handle, Position } from "reactflow";

const COLORS = {
  object: "bg-purple-500",
  array: "bg-green-500",
  primitive: "bg-yellow-500 text-black",
};

const CustomNode = ({ data }) => {
  return (
    <div
      className={`rounded-lg shadow-md text-sm px-3 py-2 min-w-[130px] text-white ${
        COLORS[data.nodeType]
      } cursor-pointer hover:scale-[1.05] transition`}
      title={`Path: ${data.path}\nValue: ${data.value}`}
    >
      <strong>{data.label}</strong>
      <div className="text-xs opacity-90">{data.value}</div>

      <Handle type="target" position={Position.Top} className="bg-gray-800!" />
      <Handle
        type="source"
        position={Position.Bottom}
        className="bg-gray-800!"
      />
    </div>
  );
};

export default CustomNode;
