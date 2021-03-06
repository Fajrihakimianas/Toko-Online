import React from 'react'
import { Switch, Route } from "react-router-dom";

import './assets/css/style.css';
import Header from 'component/nav/Header'
import Home from 'pages/Home';
import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';

import ProductDetail from 'pages/product/ProductDetail';
import Cart from 'pages/Cart';
import Jewelery from 'pages/category/Jewelery';
import Electronics from 'pages/category/Electronics';

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/product/:id' component={ProductDetail}/>
        <Route exact path='/category/jewelery' component={Jewelery}/>
        <Route exact path='/category/electronics' component={Electronics}/>
        <Route exact path='/cart' component={Cart}/>
      </Switch>
    </>
  )
}

export default App
