import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from "react-router-dom";
import './Appbar.css'


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


export default function SimpleAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar id="appBar">
          <Toolbar>
            <Typography variant="h5"><Link to="/" id="name">STREETS</Link></Typography>
            <Typography variant="h5" id="slash">/</Typography>
            <Typography variant="h5" id="links"><Link to="/Artists" id="appBarATag">Artists</Link></Typography>
            <Typography variant="h5" id="slash">/</Typography>
            <Typography variant="h5" id="links"><Link to="/Events" id="appBarATag">Events</Link></Typography>
            <Typography variant="h5" id="slash">/</Typography>
            <Typography variant="h5" id="links"><Link to="Releases" id="appBarATag">New Releases</Link></Typography> 
          </Toolbar>    
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      </React.Fragment>
  );
}

