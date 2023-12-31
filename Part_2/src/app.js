/* @jsx createElement */
import { createElement, render, Component } from "./react.js";
/*
const vdom = {
  tag: "",
  props: {},
  children: [{ tag: "", props: {}, children: [] }],
};
*/

class Title extends Component {
  render() {
    return <h1 label={this.props.label}>{this.props.children}</h1>;
  }
}

class Item extends Component {
  render() {
    return <li style={`color: ${this.props.color}`}>{this.props.children}</li>;
  }
}

/*
const Title = (props) => {
  return <h1 label={props.label}>{props.children}</h1>;
};

const Item = (props) => {
  return <li style={`color: ${props.color}`}>{props.children}</li>;
};
*/

/**
 * App
 *
 * main component
 */
const App = () => {
  return (
    <p>
      <Title label="React">Make a React well</Title>
      <ul>
        <Item color="red">first item: Virtual DOM</Item>
        <Item color="blue">second item: Diffing</Item>
        <Item color="green">third item: Reconciliation</Item>
      </ul>
    </p>
  );
};

render(<App />, document.querySelector("#root"));
