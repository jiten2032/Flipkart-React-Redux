
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Addproduct from './Components/Addproduct';
import Cart from './Components/Cart';
import Orders from './Components/Orders';


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Flipkart">
          <Route exact path='/' component={Home} />
          <Route path='/Addproduct' component={Addproduct} />
          <Route path='/Cart' component={Cart} />
          <Route path='/Orders' component={Orders} />

        </div>
      </BrowserRouter>
    )
  }
}

export default App

