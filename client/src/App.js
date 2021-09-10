import React from 'react'
import { Switch, Route } from "react-router-dom";

import './assets/css/style.css';
import Header from 'component/nav/Header'
import Home from 'pages/Home';
import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';
import Sidebar from 'component/nav/Sidebar';

const App = () => {
  return (
    <>
      <Header/>
      <Sidebar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
      </Switch>
    </>
  )
}

export default App
