// Objects  --- an assortment of key value pairs

let food = {
	pie: ['Pecan', 'Blueberry', 'Cherry', 'Key Lime'],
	pienames[],				// array object
	getPie: function(){    // get pies function object
		console.log(this)
		return this.pie; // food object
	},
//	addPie: function()      FROM MADYSON
//		return food.pies.forEach(function)(newP){console.log(newP +" pie")})

// 2ND Challenge
	getPieNames: function(){
		this.pies.forEach(function(pie){
//			console.log(pie)
//			consol.log(food.pieNames)
			food.pieNames.push(pie + " pie");
		})
		return this.pieNames
	}
	
}

console.log(food.getPieNames());


// console.log(food.pies[3] + " pie");

// Challenge iterate over the pie arrary and print out each pie and add the word 'pie' to to them
// using the ForEach method.

//food.pie.forEach(function(pie){
//	console.log(pie +' pie');
//	console.log('pie');
//})
// console.log('pie');

//console.log(food.getPie())

//console.log(this)

// Create a method inside of the object food that appends 'pie' to the list

///	console.log(forEach(this.pie +' pie'));



/*
arrOfFood.push('NY Style Pizza');

// index of item / How many to cut / What you want to replace it with
arrOfFood.splice(1, 1, 'Blueberry Pie');
arrOfFood.splice(2, 0, 'Sweet Potato');
arrOfFood.splice(4, 2);
arrOfFood.splice(0, 2);
arrOfFood.pop();    // Removes the last item.
arrOfFood.push();	// Adds current item to end of Last Item.

for(let foodItem of arrOfFood){
	console.log(foodItem);
}

// for(let foodItem of arrOfFood){
// console.log(foodItem);
// }	

arrOfFood.for EachI(functin(foodItem){
	console.log(foodItem);

}) 
*/