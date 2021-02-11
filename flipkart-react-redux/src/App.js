
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Addproduct from './Components/Addproduct';
import Cart from './Components/Cart';
import Orders from './Components/Orders';
import Mobiles from './Components/Mobiles';
import Mobile from './Components/Mobile';




export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Flipkart">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Addproduct' component={Addproduct} />
            <Route path='/Orders' component={Orders} />
            <Route path='/Cart' component={Cart} />
            <Route path='/Mobiles' component={Mobiles} />
            <Route path='/:Mobile_id' component={Mobile} />

          </Switch>


        </div>
      </BrowserRouter>
    )
  }
}

export default App

