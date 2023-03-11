// import React from 'react'
import { Component } from "react";

// code
class CounterClass extends Component {
  constructor(props) {
    console.log("class constructor");
    super(props);
    this.state = {
      count: this.props.start,
      sample: "deepak",
    };
  } // 1st

  // event in react
  incCount = () => {
    // console.log("click");
    let newState = { count: ++this.state.count };
    this.setState(newState);
  };

  // static getDerivedStateFromProps = (props, state) => {
  //   return { ...state, count: props.start };
  // }; // 2nd

  componentDidMount = () => {
    console.log("class component mounting"); // run only once
  }; // 4th

  componentDidUpdate = () => {
    console.log("class component updating"); // runs on state change
  };

  componentWillUnmount = () => {
    console.log("class component unmount"); // run only once
  };

  render() {
    // html code
    return (
      <>
        <h1>
          CC {this.state.count} {this.state.sample}
        </h1>
        <button onClick={this.incCount}>Class Inc </button>
      </>
    );
  } // 3rd
}

//export
export default CounterClass;
// React DOM Event ==> Synthetic Event (V DOM operate)
