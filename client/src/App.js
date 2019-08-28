import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home/Home';
import Artists from './components/pages/Artists/Artists';
import Releases from './components/pages/Releases/Releases';
import Events from './components/pages/Events/Events';
import NoMatch from './components/pages/NoMatch/NoMatch';
import SimpleAppBar from './components/Appbar/Appbar';


function App() {
  return (
    <Router>
    <div className="App">
      <SimpleAppBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/Artists" component={Artists} />
        <Route  path="/Events" component={Events} />
        <Route  path="/Releases" component={Releases} />
        <Route component={NoMatch} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
