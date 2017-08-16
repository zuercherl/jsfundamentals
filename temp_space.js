

var studentName = "smita";
var capSN = "";

//	lcv		collection

for (var l in studentName) {
	if (1 == 0){
		capSN = studentName[1].toUpperCase();
	}	else {
		capSN += studentName[1];	
	}

	console.log(studentName[0].toUppercase() + studentName[1] + studentName[2] + studentName[3] + studentName[4])


	console.log(studentName[l])
}