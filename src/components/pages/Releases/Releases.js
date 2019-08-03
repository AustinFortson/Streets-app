import React from "react";
import { Grid, Card, Container, Tooltip  } from '@material-ui/core';
import './Releases.css'

//Spotfy Variables for API
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
  clientId: '93e8b37320b4480e8cd2ab1f94655935',
  clientSecret: 'd5e53be2a8884da3830220ca784a8129',
});

spotifyApi.setAccessToken('BQD2DWohLZ7UgN8HESdCMaryBCgrcfkd64rJvOBgz3PaQrl5GPwII91_zhlCkPpzxqMCrHIFry4Jlw5yr_H_YG9vbQWJOMuU2rDwSuRw7JHjA8HzXqRD7kNWI_2WT0OyzMJv-bTuyz9LU31BSLo');


export default class Releases extends React.Component {
  state = {
    newReleases: [],
}

componentDidMount() {
// Retrieve new releases
spotifyApi.getNewReleases({ limit : 50, offset: 0, country: 'US' })
.then(res => {
  console.log(res.body.albums.items);
  this.setState({newReleases: res.body.albums.items})
  }, function(err) {
     console.log("Something went wrong!", err);
  });
}


  render () {
    return (
      <div>
                {/*Header*/}
                <Grid container>
                    <Grid item xs={12}>
                    <div className="page-bg"></div>
                        <h2 className="page-header">New <a id="page-header" className="font-effect-outline">Releases.</a></h2>
                    </Grid>
                </Grid>

                {/*Grid of all new releases*/}
                <Grid container id="newReleasesGrid">
                  {/*Creating A Card For Each Newly Released Project*/}
                {this.state.newReleases.map(newReleases =>

                <Grid item xs={12} sm={6} md={4} xlg={3} key={newReleases.id}>
                  <Card id="newReleaseCard">

                    {/*Name of artist with link to Spotify of artist*/}
                    <Container id="nameOfArtistDiv">
                    <Tooltip title="Go To Artist's Spotify" placement="top">
                      <a href={newReleases.artists[0].external_urls.spotify} target='_blank' rel="noopener noreferrer" className="nameOfArtist">{newReleases.artists[0].name}</a>
                      </Tooltip>
                    </Container>

                    {/*Name of project with link to Spotify*/}
                    <Container id="nameOfAlbumDiv">
                      <Tooltip title="Go To Album on Spotify" placement="bottom">
                      <a href={newReleases.external_urls.spotify} target='_blank' rel="noopener noreferrer" className="nameOfAlbum">{newReleases.name}</a>
                      </Tooltip>
                    </Container>

                    {/*Cover Art*/}
                    <Container id="coverArtDiv">
                      <a href={newReleases.external_urls.spotify} target='_blank' rel="noopener noreferrer">
                        <img src={newReleases.images[0].url} alt="coverArt" className="coverArt"/>
                        </a>
                    </Container>

                    {/*Displaying what type of proejct, how many tracks, and release date*/}
                    <Container id="releaseInfo">
                      {newReleases.album_type}
                      <br/>                    
                      Tracks: {newReleases.total_tracks}
                      <br/>
                      Released: {newReleases.release_date}
                      <br/> 
                    </Container>

                      </Card>            
                    </Grid>
                    )}
                </Grid>


        </div>
    )
  }

}


