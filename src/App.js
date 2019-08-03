import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home/Home';
import Artists from './components/pages/Artists/Artists';
import Releases from './components/pages/Releases/Releases';
import Events from './components/pages/Events/Events';
import SimpleAppBar from './components/Appbar/Appbar';


function App() {
  return (
    <Router>
    <div className="App">
      <SimpleAppBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/artists" component={Artists} />
        <Route  path="/events" component={Events} />
        <Route  path="/releases" component={Releases} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
