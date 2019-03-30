import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import Chart from './components/Chart'
const Auth = new AuthService();
class App extends Component {
  render() {
      return(
          <div className="App">
              <div className="myhead">
                  <h1>Yeah babu rao ka istyle hai </h1>
                  <Chart   />
              </div>
              <p className="App-intro">
                  <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
              </p>
          </div>
      )
  }
    handleLogout(){
        Auth.logout()
        this.props.history.replace('/login');
    }
}

export default withAuth(App);
