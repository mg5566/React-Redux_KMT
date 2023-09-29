import { createDOM, render } from "./react.js";
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
        {
          tag: "li",
          props: { style: "color: red" },
          children: ["first item: Virtual DOM"],
        },
        {
          tag: "li",
          props: { style: "color: blue" },
          children: ["second item: Diffing"],
        },
        {
          tag: "li",
          props: { style: "color: green" },
          children: ["third item: Reconciliation"],
        },
      ],
    },
  ],
};

render(vdom, document.querySelector("#root"));
