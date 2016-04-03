//nodejs setup
console.log('bacon');

//first tutorial
var person ={
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
//this is called an anoynomous function. A function with no name
//the function is assigned to a variable without a name
printBacon();

setTimeout(printBacon, 5000);

//second tutorial
function placeAnOrder(orderNumber){
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