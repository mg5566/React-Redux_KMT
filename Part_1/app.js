function createH1(props) {
  return [document.createElement("h1")].map((element) => {
    Object.entries({ ...props, "data-id": "title" }).forEach(([name, value]) =>
      element.setAttribute(name, value)
    );
    return element;
  })[0];
}

function createDiv(props) {
  return [document.createElement("div")].map((element) => {
    Object.entries({ ...props, "data-id": "layout" }).forEach(([name, value]) =>
      element.setAttribute(name, value)
    );
    return element;
  });
}

function createElement(type, props) {
  switch (type) {
    case "h1":
      return [document.createElement("h1")].map((element) => {
        Object.entries({ ...props, "data-id": "title" }).forEach(
          ([name, value]) => element.setAttribute(name, value)
        );
        return element;
      })[0];
    case "div":
      return [document.createElement("div")].map((element) => {
        Object.entries({ ...props, "data-id": "layout" }).forEach(
          ([name, value]) => element.setAttribute(name, value)
        );
        return element;
      });
  }
}
