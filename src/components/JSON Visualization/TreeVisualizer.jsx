import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import { jsonToFlow } from "./jsonToFlow";
import { applyLayout } from "./applyLayout";
import CustomNode from "./CustomNode";

const nodeTypes = { customNode: CustomNode };

const TreeVisualizer = ({ jsonData }) => {
  let { nodes, edges } = jsonToFlow(jsonData);

  nodes = applyLayout(nodes, edges);

  return (
    <div className="w-[935px]  h-[500px] border bg-gray-900 rounded-lg">
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default TreeVisualizer;
