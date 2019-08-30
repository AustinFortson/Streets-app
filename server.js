// Dependencies
// =============================================================
require('dotenv').config();
const express       = require('express');
const cors          = require('cors');
const routes        = require("./routes");
const connection    = require('./models/dbconnection');

//MYSQL Connection Verified
// =============================================================
connection.connect(function() {
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

//Function to retrieve and console log newreleases table from streets_db into terminal
const afterConnection = () => {
    console.log(`This was successful`)
    var query = "SELECT * FROM newreleases";
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        const releases = (res[i]);
        const divider = "_______________NEW RELEASE INFO BELOW_______________";
        console.log(divider);
        console.log(JSON.stringify(releases, undefined, 2));
      };
      connection.end();
  });
};

// Sets up the Express App
// =============================================================
const PORT      = process.env.PORT || 8080;
const app       = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Add routes, both API and view
app.use(routes);
// Serve up static assets
if (process.env.NODE_ENV === "production"){
app.use(express.static("client/build"));
}


// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`))