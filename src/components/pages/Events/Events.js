import React from "react";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './Events.css'

//Function for Shuffling 
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


export default class Events extends React.Component {
  state = {
    city: '',
    events: [],
}


onSubmit = event => {
  event.preventDefault();
  axios.get('https://app.ticketmaster.com/discovery/v2/events?classificationName=music&city=' + this.state.city +'&apikey=65F2hj7ogdGjWYGHFTsbgI4vFJE9J6vQ')
      .then(res => {
         console.log(res.data._embedded.events);
         this.setState({city: city, events: res.data._embedded.events});
         //Shuffling The Events Array in State So User Doesn't Get Same Results Each Time
         let arr = this.state.events;
         shuffle(arr);
         //Resetting State To Shuffled Array
         this.setState({city: city, events: arr});
      });
      const city = this.city.value;
  }


  render () {
    return (
      <div>
        <React.Fragment>
                {/*Search Local Events Header*/}
                <Grid container>
                    <Grid item xs={12}>
                    <div className="page-bg"></div>
                        <h2 className="page-header">Search Local <a id="page-header" className="font-effect-outline">Events.</a></h2>
                    </Grid>
                  </Grid>

                {/*Input Field*/}
                <Grid xs={12}id="formGrid">
                    <Paper className="paper" id="formpaper">
                    <SearchIcon id="searchIcon" onClick={this.onSubmit}/>
                <form onSubmit={this.onSubmit} id="search-form">
                <input type="text" name="city-input" ref={input => this.city = input} onSubmit={this.onSubmit} id="city-input" placeholder="Search City (ex. Charlotte, North Carolina or Charlotte)"/>
                </form>
                {/*Show Results Count*/}
                <h3 className="city-display">Showing {this.state.events.length} results for: {this.state.city} from <a href="https://www.ticketmaster.com/" target="_blank" rel="noopener noreferrer" id="ticketmaster-link">Ticketmaster</a></h3>
                </Paper>
                </Grid>

                    <Grid container item xs={12} md={9} direction="row" justify="space-evenly" id="eventsGrid">
                      {/*Events Card*/}
                    {this.state.events.map(events =>

                    <Grid id="eventsCard" item xs={12} sm={6} md={4} lg={4} xl={3} key={events.id}>
                      <Paper xs={12} id="eventsPaper">
                        {/*Artists Name*/}
                        <Typography id="event-artist-name">
                          {events._embedded.attractions[0].name}
                        </Typography>
                        {/*Event Name*/}
                        <Typography id="event-name">
                          {events.name}
                        </Typography>
                        {/*Event Genre*/}
                        <Typography id="event-genre">
                          Genre: {events.classifications[0].genre.name}
                        </Typography>  
                        {/*Event Img*/}                   
                        <div>
                          <img src={events.images[0].url} alt="eventimg" className="eventImg"/>
                        </div>
                        {/*Venue Name*/}
                        <Typography id="venue">
                          {events._embedded.venues[0].name}
                        </Typography>
                        {/*City Name*/}
                        <Typography id="event-city">
                          {events._embedded.venues[0].city.name}
                        </Typography> 
                        {/*Start Date*/}
                        <Typography id="start-date">
                          On: {events.dates.start.localDate}
                        </Typography>
                        {/*Start Time*/}
                        <Typography id="start-time">
                          Starts at: {events.dates.start.localTime}
                      </Typography>
                      {/*Button To Link To Event's Ticketmaster*/}
                      <Grid justify="center" alignItems="center" id="buttonGrid">                      
                      <Typography id="linkButton">
                      <Button variant="contained" justify="center" id="ticketmasterButton" href={events.url} target="_blank">
                          TicketMaster
                      </Button>
                  </Typography>
                  </Grid>
                      
                    </Paper>
                    </Grid> )}
                    </Grid>
              </React.Fragment>
        </div>
    )
  }
}


