/* @jsx createElement */
import { createElement, render } from "./react.js";
/*
const vdom = {
  tag: "",
  props: {},
  children: [{ tag: "", props: {}, children: [] }],
};
*/

const vdom = (
  <p>
    <h1>Make a React</h1>
    <ul>
      <li style="color: red">first item: Virtual DOM</li>
      <li style="color: blue">second item: Diffing</li>
      <li style="color: green">third item: Reconciliation</li>
    </ul>
  </p>
);

render(vdom, document.querySelector("#root"));
