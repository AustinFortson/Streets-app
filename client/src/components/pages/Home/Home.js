import React from "react";
import {Grid, Container } from '@material-ui/core';
import './Home.css'
import LinkCard from '../../LinkCard/LinkCard'


//Load a different color header each time
var color = ['#9dabdd', '#ef8b880', '#ecbe7a', '#70ae98', '#f6a7c1', '#bc85a3', '#fdcf76', '#89aeb2', '#97f2f3', '#e7cfc8', '#c1cd97', '#5e96ae', '#38908f', '#fead89', '#e6b655', '#ca7e8d', '#2e8364', '#d7e7a9', '#c3e4fd', '#e18d96', '#f2cf59'];
window.onload = function () {
    var headerbg = document.querySelectorAll(".header-bg");
    for (var i = 0; i < headerbg.length; i++) {
        headerbg[i].style.background = color[Math.floor(Math.random() * color.length)]
    }
}

function Home() {
    return (
        <div>
            <Grid container id="grid-container">
                <div className="header-bg"></div>
                <Grid item xs={6}>
                    <h1 id="header">Keep an Ear To The <a id="header" className="font-effect-outline">Streets.</a></h1>
                </Grid>

                <Grid item xs={6}>
                    <img id="streetsImg" src="https://images.unsplash.com/photo-1549212197-3b55788f1bf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" alt="streets" />
                </Grid>
            </Grid>

            <Grid container id="grid-container">
                <Grid item xs={12}>
                    <h1 id="get-started">Get Started</h1>
                </Grid>
                <Grid item xs={6}>
                    <Container>
                    <h2 id="about-us">About Us</h2>
                    </Container>
                </Grid>
                <Grid item xs={6}>
                    <Container>
                    <p className="about-us-content">Streets is a place dedicated to helping you find local musicians and music events.</p>
                    <p className="about-us-content">With the resources of SoundCloud, Spotify, and Ticketmaster you can find your new favorite artist by searching your city or the artist directly, find local music events and find new releases.</p>
                    </Container>
                </Grid>
            </Grid>

                <Grid container id="card-grid-container">
                    <Grid item xs>
                        <LinkCard id="artists" title="Artists" desc="Search for up to 200 SoundCloud artists in any given city at a time by entering either a city name or the artist name." link="/Artists" button="artistsbtn">
                        </LinkCard>
                    </Grid>
                    <Grid item xs>
                        <LinkCard id="events" title="Events" desc="Search up to 20 local music events at a time from Ticketmaster by searching the city you're in." link="/Events" button="eventsbtn">
                        </LinkCard>
                    </Grid>
                    <Grid item xs>
                        <LinkCard id="playlists" title="New Releases" desc="Discover new projects and artists. Browse the 50 most recent releases from Spotify." link="/Releases" button="playlistsbtn">                             
                         </LinkCard>
                    </Grid>
                </Grid>


        </div>
    );
}

export default Home;

