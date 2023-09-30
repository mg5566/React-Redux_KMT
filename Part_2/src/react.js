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

  // tag 가 함수면
  if (typeof tag === "function") {
    if (children.length > 0) {
      return tag({
        ...props,
        children: children.length === 1 ? children[0] : children,
      });
    } else {
      // 함수 실행
      return tag(props);
    }
  } else {
    return { tag, props, children };
  }
}
