import React from 'react';
import {Paper, Button, Container} from '@material-ui/core';
import './LinkCard.css'


class LinkCard extends React.Component {
  render () {
    return (
    <div id="root">
        <Paper id={this.props.id}>
            <h3 className="title">{this.props.title}</h3>
            <h4 className="description">{this.props.desc}</h4>
            <Container>
            <Button variant="contained" id={this.props.button} href={this.props.href}>Get Started</Button>
            </Container>
        </Paper> 
    </div>
  );
}
}

export default LinkCard;