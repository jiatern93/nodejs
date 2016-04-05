//tutorial 6 this is a module. it exports things
/*function printAvatar(){
	console.log("Avatar: PG-13");
}

function printChappie(){
	console.log("Chappie: R");
}

module.exports.avatar = printAvatar;
module.exports.avatar = printChappie;*/

//tutorial 7
/*module.exports = {
	printAvatar: function(){
		console.log("Avatar");
	},
	printChappie: function(){
		console.log("Chappie");
	},

	favMovie: "The Matrix"
}; //is automatically added to any module
*/

//tutorial 8
/*module.exports = {
	favMovie: ""
};*/

module.exports = function(){
	return{
		favMovie: ""
	}
}