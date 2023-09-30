import { createElement, render } from "./react.js";
/*
const vdom = {
  tag: "",
  props: {},
  children: [{ tag: "", props: {}, children: [] }],
};
*/

const vdom = createElement(
  "p",
  {},
  createElement("h1", {}, "Make a React"),
  createElement(
    "ul",
    {},
    createElement("li", { style: "color: red" }, "first item: Virtual DOM"),
    createElement("li", { style: "color: blue" }, "second item: Diffing"),
    createElement("li", { style: "color: green" }, "third item: Reconciliation")
  )
);
render(vdom, document.querySelector("#root"));
