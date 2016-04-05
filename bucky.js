//tutorial 8
/*var movies = require('./movie');
console.log("bucky's fav movie is " + movies.favMovie);*/

//tutorial 9
//object factories
var movies = require('./movie');
var buckysMovies = movies();
buckysMovies.favMovie = "good will hunting";
console.log("buckys fav movie is " + buckysMovies.favMovie)