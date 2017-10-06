import React, { Component } from 'react';
import './App.css';
import {HashRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route ppath="/resume" component={Resume} /> */}
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            {/* <Route path="/contact" component={Contact} /> */}
            <Route render={() => {
              return <p>Please Click on the Home Button to get to the home page </p>
            }} />


          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
