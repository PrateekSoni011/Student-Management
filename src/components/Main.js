import React, { Component } from 'react';
import logo from '../Assets/logo.svg';
import '../Styles/App.css';


class Main extends Component {

  state = {
    toggle: false,
  };

  function = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render = () => {
    return (
      <div>
        <div className="row mx-0">
          <div className="col-12 px-0">
            <div className="App">
              <header className="App-header">
                <div className="caption-wrapper">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="Welcome-title">Welcome to React Workshop</h1>
                  <h2 className="App-title"> Learn how to create interactive UIs </h2>
                </div>
              </header>
              <div className="container">
              </div>
            </div>
          </div>
        </div>
        <div className="footer mx-0 mt-5">
          <div className="container innerContainer">
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
