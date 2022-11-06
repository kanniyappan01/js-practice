//object
/*
var person = {
	name: "kani",
	age: 20,
	gender: "male",
	isAlive: true,
	address: "Chennai, Tamil Nadu, India",
	sibling: {
		brother01: "taiml",		
		brother02: "kavi"
	}
} 
console.log(person)

//dot notation

console.log(person.age);
console.log(person.sibling.brother02);

//bracket notation

console.log(person["gender"])

*/

//array

/*
var favColors=["red", "white", "black", "grean"]

console.log(favColors)

console.log(favColors[0])

favColors[5] = "blue";

console.log(favColors.length)

console.log(typeof favColors)

*/

//funtion

/*
function greetUser(){
	var name = "kani";
	var msg = "Hello " + name +" Your are learning javascrip!";
	console.log(msg)
}

greetUser()

function greetUser(name){
	var msg = "hello " + name + " your are learning javascript!";
	console.log(msg)
}
greetUser("kavi")

greetUser("Taml")
*/

 /*
 function greetUser(firstName, lastName){
	 var msg = "hello " + firstName + "" + lastName + " your are learning aptitude!";
	 console.log(msg)
 }
 greetUser("kavi", " yarasu")
 */
 //aptitude sum via function
 
 // for loop
 /*
for(i=0; i <=10; i++){
	if(i%2){
		console.log("Number: "+i);
	}
}

 
var i= 0;

while(i <= 10){
	if(i%2){
		console.log("Number: "+i);
	}
	i++;
}
 */
/*
var month =4;

for(var days = 1; days <= 31; days++){
	if((month == 4 || month == 6 || month == 9 || month == 11) && days == 31) continue;
	
	else if(month == 2 && days == 28) break;
	
	console.log("days: ", days);
}
*/

/*
var total = 0;
for(i=1;i <=5;i++){
	num = i*12;
	total=total+num;
	console.log(total);
}

var j=12;
var num=0;
var total=0;
for(var i=1;i<=5;i++){
num=i*j;
total=total+num;
console.log(total)
}

*/
