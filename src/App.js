import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search'
import GiveRent from './components/GiveRent';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Response from './components/Response';
import Card from './components/Card';
import Confirm from './components/Confirm';

class App extends Component {
  render() {
    return (
      <div>

        <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/Search' component={Search} />
          <Route path="/GiveRent" render={props => <GiveRent {...props} />} />
          <Route path="/Response" render={props => <Response {...props} />} />
          <Route path="/Card" render={props => <Card {...props} />} />
          <Route path="/Confirm" render={props => <Confirm {...props} />} />
        </BrowserRouter>
        <BottomNav />
      </div>
    );
  }
}

export default App;
