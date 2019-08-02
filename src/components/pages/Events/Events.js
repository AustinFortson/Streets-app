import React from "react";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

//Function for Shuffling 
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

export default class Events extends React.Component {
  state = {
    events: [],
}


componentDidMount() {
    axios.get('https://app.ticketmaster.com/discovery/v2/events?classificationName=music&city=charlotte&apikey=65F2hj7ogdGjWYGHFTsbgI4vFJE9J6vQ')
        .then(res => {
           console.log(res.data._embedded.events);
           this.setState({events: res.data._embedded.events});
           //Shuffling The Events Array in State So User Doesn't Get Same Results Each Time
           let arr = this.state.events;
           shuffle(arr);
           //Resetting State To Shuffled Array
           this.setState({events: arr});
        });
}


  render () {
    return (
      <div>
                <Grid container>
                    <Grid item xs={12}>
                    <div className="page-bg"></div>
                        <h2 className="page-header">Search Local <a id="page-header" className="font-effect-outline">Events.</a></h2>
                    </Grid>

                    <Grid item xs={12}>
                    {this.state.events.map(events =>

                    <div>
                      {events.name}
                      <br/>
                      {events.dates.start.localDate}
                      <br/>
                      {events.dates.start.localTime}
                      <br/>
                      

                    </div> )}
                    </Grid>
                </Grid>
        </div>
    )
  }
}


