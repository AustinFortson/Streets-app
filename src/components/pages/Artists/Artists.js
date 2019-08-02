import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './Artists.css';

//Function for Shuffling 
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  //Load a different color header each time
var color = ['#9dabdd', '#ef8b880', '#ecbe7a', '#70ae98', '#f6a7c1', '#bc85a3', '#fdcf76', '#89aeb2', '#97f2f3', '#e7cfc8', '#c1cd97', '#5e96ae', '#38908f', '#fead89', '#e6b655', '#ca7e8d', '#2e8364', '#d7e7a9', '#c3e4fd', '#e18d96', '#f2cf59'];
window.onload = function () {
    var pagebg = document.querySelectorAll(".page-bg");
    for (var i = 0; i < pagebg.length; i++) {
        pagebg[i].style.background = color[Math.floor(Math.random() * color.length)]
    }
}

export default class Artists extends React.Component {
    state = {
        city: "",
        artists: [],
    }

    //Taking In User Input And Giving API Results
    onSubmit = event => {
        event.preventDefault();
        axios.get('http://api.soundcloud.com/users?q=' + this.state.city +'&client_id=95f22ed54a5c297b1c41f72d713623ef&limit=200')
        .then(res => {
            console.log(res);
            this.setState({ city: city, artists: res.data, });
            //Shuffling The Artists Array in State So User Doesn't Get Same Results Each Time
            let arr = this.state.artists;
            shuffle(arr);
            //Resetting State To Shuffled Array
            this.setState({city: city, artists: arr});
        });
        const city = this.city.value;
       };      

    // componentDidMount() {
    //     axios.get('http://api.soundcloud.com/users?q=' + this.state.city +'&client_id=95f22ed54a5c297b1c41f72d713623ef&limit=200')
    //         .then(res => {
    //            console.log(res);
    //         });
    // }

    render() {
        return (
            <div className="background">
            <React.Fragment>

                <Grid container>
                    <Grid item xs={12}>
                    <div className="page-bg"></div>
                        <h2 className="page-header">Search Local <a id="page-header" className="font-effect-outline">Artists.</a></h2>
                    </Grid>
                </Grid>
                
                <Grid xs={12}id="formGrid">
                    <Paper className="paper" id="formpaper">
                    <SearchIcon id="searchIcon" onClick={this.onSubmit}/>
                <form onSubmit={this.onSubmit} id="search-form">
                <input type="text" name="city-input" ref={input => this.city = input} onSubmit={this.onSubmit} id="city-input" placeholder="Search City or Artist (ex. Charlotte, North Carolina or J. Cole)"/>
                </form>
                <h3 className="city-display">Showing {this.state.artists.length} results for: {this.state.city} from SoundCloud</h3>
                </Paper>
                </Grid>

            <Grid container item xs={12} md={9} id="artistGrid">
            {this.state.artists.map(artists =>
            <div className="artistCard" item xs={12} key={artists.id}>
                <Paper className="paper" id="artistpaper">
                    <Grid container spacing={2}>
                        <Grid item xs={12} id="image-section">
                            <div className ="imageHolder">
                                <img className="img" alt="avatar" src={artists.avatar_url} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" id="userName">
                                        {artists.username}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom id="city">
                                        City: {artists.city}
                                    </Typography>
                                    <Typography variant="body2" id="followers">
                                        Followers: {artists.followers_count}
                                    </Typography>
                                    <Typography variant="body2" id="trackCount">
                                        Track Count: {artists.track_count}
                                    </Typography>
                                    <Typography variant="body2" id="playListCount">
                                        Playlist Count: {artists.playlist_count}
                                    </Typography>
                                    <Typography variant="body2" id="repostCount">
                                        Reposts Count: {artists.reposts_count}
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography className="description">
                                        {artists.description}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                    <Button variant="contained" id="soundCloudButton" href={artists.permalink_url} target="_blank">
                                        SoundCloud
                                    </Button>
                                </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>)}
            </Grid>

            </React.Fragment>
            </div>
        );
    }
}

