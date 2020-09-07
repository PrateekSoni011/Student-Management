import React, { Component } from 'react';
import '../Styles/App.css';
import { signUpAPI } from "../actions/api";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';

class className extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      logedIn: false
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    this.props.signUpAPI(this.state).then(()=>{
        let res = this.props.api_data
        console.log(res);
        this.setState({
            logedIn: true
        })
    })
    .catch((err)=>{
        console.log(err)
    })
    console.log(this.state);
        
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      this.state.logedIn ?  <Redirect to="/addStudent"/> : 
      <div className="signUp">        
        <form onSubmit={this.handleSubmit}>          
          <div className="container">
            <label ><b>Username</b></label>
            <input type="text" value={this.state.username} onChange={this.handleUserChange} placeholder="Enter Username" required />
            <label ><b>Password</b></label>
            <input type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handlePassChange} required />                
            <input type="submit" value="Sign In"  />            
          </div>          
          <Link to="/"  >Log In</Link>
        </form>        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      api_data: state.data.api_data,
  };
}
export default connect(mapStateToProps, { signUpAPI })(className);
