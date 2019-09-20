// Dependencies
// =============================================================
require('dotenv').config();
const path          = require("path");
const express       = require('express');
const app           = express();
const newReleases   = require("../scripts/sqltable.json")
const fs            = require('fs');
const fetch         = require('node-fetch');
const router        = require("express").Router();
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi    = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_ID,
    clientSecret: process.env.SPOTIFY_SECRET,
  });
//Expires after 1 hour (manually have to copy and paste a new one)
spotifyApi.setAccessToken('BQBtvLZgls0hRkmDiLO_VbY7NAV-F-HwkSPoXsaYtuTia5_6AyOWTPrxfP9rPX_O5HlRNZn9Izj99j0p35rKdGFCmHPO7HgxihBx9-RqwcpkE4oqUSaCzF6Dpu-yPTjO1v50Y-g38ORIDTYpaY8');
  
  //Spotify API Route
  router.get('/spotifyapi', async (req, results) => {
      spotifyApi.getNewReleases({ limit: 50, offset: 0, country: 'US' })
      .then(res => {
          const releases = res.body.albums.items
          results.json(releases);
          console.log(releases);
          console.log("50 NEW RELEASES SUCCESFULLY SHOWING FROM SPOTIFY!");
          (err => {
              console.log("Something went wrong!", err);
           });
          //Create a .json file for all the spotify api results as a seed to place into mysql db
          const jsonString = JSON.stringify(releases)
          fs.writeFileSync('./scripts/newReleases.json', jsonString, err => {
              if (err) {
                  console.log('Error writing file', err)
              } else {
                  console.log('Successfully wrote file')
              }
          });
      });
  });

  
  //Saved New Releases Route
  router.get('/newreleases', (req, res)=> {
        res.send(newReleases);
        console.log(newReleases);
    });
  
  
  //Eventbrite API Route
  router.get(`/eventbriteapi`, async (req, res) => {
      const api_url = `https://www.eventbriteapi.com/v3/events/search?categories=103&token=LX4U7FZ67WV25WBHS43D&location.address=charlotte`;
      const fetch_response = await fetch(api_url);
      const json = await fetch_response.json();
      res.json(json);
      console.log(json);
  });
  

// Send every request to the React app
app.use("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;
