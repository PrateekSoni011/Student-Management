import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../Assets/logo-top.svg';

class Header extends Component {

  state = {
    activeButton: null,
  };

  activeClass = (event) => {
    this.setState({
      activeButton: event
    })
  }

  render = () => {
    return (
      <div >
        <div className="logo-header">
          <img src={logo} className="App-logoTop" alt='test'/>
        </div>
        <nav className="navbar">
          <ul>
            <li className={"nav-item" + this.state.activeButton === 'active' ? "active" : ""}>
              <Link to="/addStudent" onClick={() => this.activeClass.bind(this, 'active')} className="nav-link"  >Add Student</Link>
            </li>
            <li className={"nav-item" + this.state.activeButton === 'viewStudent' ? "active" : ""}>
              <Link to="/viewStudent" onClick={this.activeClass.bind(this, 'viewStudent')} className="nav-link" >View Student</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
