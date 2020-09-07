import React from 'react';
import { Route } from 'react-router-dom'
import App from './components/App';
// import Main from './components/Main';
// import Header from './components/Header';
import ViewStudent from './components/ViewStudent';
import AddStudent from './components/AddStudent';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';

export default (
	<App>
		{/* <Route path="/"  component={Main} /> */}
		<Route path="/"  exact component={LoginPage} />
		<Route path="/signUp"  exact component={SignUp} />
		{/* <Route path="/header" component={Header} /> */}
		<Route path="/viewStudent" component={ViewStudent} />
		<Route path="/addStudent" component={AddStudent} />
		
	</App>
);