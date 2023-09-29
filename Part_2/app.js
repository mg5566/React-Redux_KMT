/*
const vdom = {
  tag: "",
  props: {},
  children: [{ tag: "", props: {}, children: [] }],
};
*/

const vdom = {
  tag: "p",
  props: {},
  children: [
    { tag: "h1", props: {}, children: ["Make a React"] },
    {
      tag: "ul",
      props: {},
      children: [
        { tag: "li", props: {}, children: ["first item: Virtual DOM"] },
        { tag: "li", props: {}, children: ["second item: Diffing"] },
        { tag: "li", props: {}, children: ["third item: Reconciliation"] },
      ],
    },
  ],
};

function createDOM(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  // document.createElement('');
  const element = document.createElement(node.tag);

  /*
  node.children
    .map((child) => createDOM(child))
    .forEach((item) => {
      element.appendChild(item);
    });
  */
  node.children.map(createDOM).forEach(element.appendChild);
  // node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

document.querySelector("#root").appendChild(createDOM(vdom));
