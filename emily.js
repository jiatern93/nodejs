//tutorial 8
/*var movies = require('./movie');
movies.favMovie = "The Notebook";
console.log("emily's fav movie is " + movies.favMovie);*/

//tutorial 9
var movies = require('./movie');
var emilysMovies = movies();
emilysMovies.favMovie = "the notebook";
console.log("emilys fav movie is " + emilysMovies.favMovie)