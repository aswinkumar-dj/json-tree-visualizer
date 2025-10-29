let nodeId = 0;

export function jsonToFlow(data, parentId = null, keyPath = "$") {
  const id = `node_${nodeId++}`;

  let nodeType;
  if (typeof data === "object" && data !== null) {
    nodeType = Array.isArray(data) ? "array" : "object";
  } else {
    nodeType = "primitive";
  }

  const nodes = [
    {
      id,
      position: { x: 0, y: 0 },
      data: {
        label: keyPath,
        value:
          nodeType === "primitive"
            ? JSON.stringify(data)
            : nodeType.toUpperCase(),
        path: keyPath,
        nodeType,
      },
      type: "customNode",
    },
  ];

  const edges = parentId
    ? [{ id: `edge_${parentId}_${id}`, source: parentId, target: id }]
    : [];

  if (nodeType === "object") {
    Object.keys(data).forEach((key) => {
      const child = jsonToFlow(data[key], id, `${keyPath}.${key}`);
      nodes.push(...child.nodes);
      edges.push(...child.edges);
    });
  } else if (nodeType === "array") {
    data.forEach((item, i) => {
      const child = jsonToFlow(item, id, `${keyPath}[${i}]`);
      nodes.push(...child.nodes);
      edges.push(...child.edges);
    });
  }

  return { nodes, edges };
}
