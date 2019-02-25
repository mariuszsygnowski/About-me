import React from "react";
import "../styles/components/app.scss";

import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.react.min.css";

// import Footer from './Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleResults = this.handleResults.bind(this);
  }

  handleResults() {
    this.setState({});
  }

  render() {
    return (
      <div className={"app"}>
        <p>Welcome</p>
      </div>
    );
  }
}
