import { useRef, useState } from "react";
import { sampleJson } from "./sampleJson";
import TreeVisualizer from "../JSON Visualization/TreeVisualizer";

const JsonInputBox = () => {
  const [jsonText, setJsonText] = useState("");
  const [parsedJSON, setParsedJSON] = useState(null);
  const treeRef = useRef(null);

  const loadData = () => {
    setJsonText(JSON.stringify(sampleJson, null, 2));
  };
  const visualizeJson = () => {
    try {
      const parsed = JSON.parse(jsonText);
      setParsedJSON(parsed);

      setTimeout(() => {
        treeRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      alert("Invalid JSON. Please fix and try again.");
    }
  };

  return (
    <div>
      <textarea
        placeholder="Paste your JSON here..."
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
        className="w-full h-100 bg-gray-800 text-white p-4 rounded-xl resize-none leading-tight placeholder:text-gray-400 focus:outline-blue-500"
      ></textarea>

      <div className="py-10 flex justify-around items-center">
        <button
          className="bg-linear-to-r w-70 from-purple-500 to-blue-500 text-white text-xl px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-blue-600 hover:to-blue-600"
          onClick={visualizeJson}
        >
          Visualize JSON
        </button>

        <button
          className="relative text-white text-xl font-medium group"
          onClick={loadData}
        >
          Load Sample Data
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button
          className="bg-red-500 text-white text-xl px-6 py-3 rounded-xl font-semibold 
               transition-all duration-300 hover:bg-red-600"
          onClick={() => window.location.reload()}
        >
          Reset
        </button>
      </div>
      {parsedJSON && (
        <div ref={treeRef} className="mt-30 h-[650px] w-[650px]">
          <TreeVisualizer jsonData={parsedJSON} />
        </div>
      )}
    </div>
  );
};

export default JsonInputBox;
