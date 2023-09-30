export function createDOM(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  // document.createElement('');
  const element = document.createElement(node.tag);

  // props
  Object.entries(node.props).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });

  /*
  node.children
    .map((child) => createDOM(child))
    .forEach((item) => {
      element.appendChild(item);
    });
  */
  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));
}

// export function createElement(tag, props = {}, ...children) {
export function createElement(tag, props, ...children) {
  props = props || {};
  return { tag, props, children };
}
