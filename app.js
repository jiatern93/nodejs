//nodejs setup
//console.log('bacon');

//first tutorial
/*var person ={
	firstName: "JT",
	lastName: "Ng",
	age: 20
};
console.log(person);

function addNumber(a,b){
	return a + b;
}
console.log(addNumber(7,3));

function worthless(){

}
console.log(worthless());

var printBacon = function(){ 
	console.log("bacon is healthy. Dont leave the doctors!");
};
printBacon();

setTimeout(printBacon, 5000);
*/
//this is called an anoynomous function. A function with no name
//the function is assigned to a variable without a name

//second tutorial
//this is about callback
/*function placeAnOrder(orderNumber){
	console.log("Customer order:", orderNumber);
	cookAndDeliverFood(function(){
		console.log("Delivered food order:", orderNumber);
	});
}

function cookAndDeliverFood(callback){ //simluate a 5 second operation
	setTimeout(callback, 5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
*/
//tutorial 3
//this is about passing by reference
/*var Bucky = {
	favFood: "Bacon",
	favMovie: "Chappie"
};
var Person = Bucky;
Person.favFood = "salad";
console.log(Bucky.favFood);

console.log(19 == '19'); //true because == comapares value
console.log(19 === '19'); //false because === compares type
*/
//tutorial 4
var Bucky = {
	printFirstName: function(){
		console.log('My name is Bucky');
		console.log(this === Bucky);
	}
};
Bucky.printFirstName();

function doSomethingWorthless(){
		console.log('\nI am worthless');
		console.log(this === global);
}
doSomethingWorthless();
//the default calling context is global. T
//tutorial 5



