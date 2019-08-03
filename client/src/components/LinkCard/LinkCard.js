import React from 'react';
import {Paper, Button, Container} from '@material-ui/core';
import { Link } from "react-router-dom";
import './LinkCard.css'


class LinkCard extends React.Component {
  render () {
    return (
    <div id="root">
        <Paper id={this.props.id}>
            <h3 className="title">{this.props.title}</h3>
            <h4 className="description">{this.props.desc}</h4>
            <Container>
              <Link to ={this.props.link}>
            <Button variant="contained" id={this.props.button}>Get Started</Button>
            </Link>
            </Container>
        </Paper> 
    </div>
  );
}
}

export default LinkCard;