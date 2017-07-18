var dataKeys = require("./keys.js");
var fs = require("fs"); //read write
var twitter = require('twitter');
var request = require('request');
var Spotify = require('node-spotify-api');
var argument = process.argv[2];

var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

//Pseudocode:
// Complete writing code to acquire the data from the key.js file.
//write code to create an array to store user input.
//Write for loop functions and switch functions to allow user to select which 
//api will be used. 
//write functions for twitter, spotify, imbd.
//write functions to output the data back to the user.