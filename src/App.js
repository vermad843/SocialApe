import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


import home from './Pages/home';
import login from './Pages/login';
import signup from './Pages/signup';


class App extends Component {
  render() {
    return (
      <div className ="App">
        <Router>
           <Switch>
               <Route exact path = "/" component ={home}/>
               <Route exact path = "/login" component ={login}/>
               <Route exact path = "/signup" component ={signup}/>
           </Switch>
        </Router>
      </div>
    );
  }
}

export default App;