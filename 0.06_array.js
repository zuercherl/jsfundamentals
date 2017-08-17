// Arrays

let students = ['Thomas', 'Madyson', 'Brandon', 'Leon', 23, true, ['Jackson', 'Perry']];

console.log(typeof(students));

console.log(students[2]);

console.log("Hello", students[6][1], "the Platypus.");


// Grab the nested array out of the students array and grab 'Perry' then print
// to the console "Hello Perry the Platypus"

let arrOfFood = ['Quesadilla', 'Pecan Pie', 'Potato', 'CheeseCake', 'Shrimp Pasta']

for (var i = 0; i < arrOfFood.length; i++) {
	console.log(arrOfFood[i])
}


// Prints out the value instead of the index number.
for (var i of arrOfFood) {
	console.log(i)
}

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