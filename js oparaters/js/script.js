//arithmetic operater
/*
var result = 10 + 20;
console.log(result);

result = result - 10;
console.log(result);

result = result * 5;
console.log(result)

result = result / 10;
console.log(result);

result = result + 10;
console.log(result)

result++;
console.log(result);

result--;
console.log(result)

console.log(2019+ "sometext")

console.log(typeof Nan)
/*

//comparison oparator

// == equal to
/*
var x = 5;

console.log(x == 8); //false
console.log(x == 5); //true
console.log(x == "5"); // true
*/

// === equal value and equal type

/*var x = 5;

console.log(x === 5); //true
console.log(x === 8); //false
console.log(x === "5") //false */

// != not equal
/*
var x = 5;

console.log(x != 5) //false
console.log(x != 8); //true
console.log(x != "8"); //true
console.log(x != "5"); //false
*/
// !== 	not equal value or not equal type 
/*
var x = 5;

console.log(x !== 5); //false
console.log(x !== 8); // true
console.log(x !== "5"); // true
console.log(x !== "8"); // true
console.log("bbbb" < "cbbb"); 
console.log("bbbb" < "aaaa");
console.log("2" < "2");

//ternory oparator
/*
var age = 10;
var name = (age > 18) ? "adult":"child";

console.log(name);
*/

//logical opraotor

// && (and) oparators

/*
var highincome = true;

var cibilScore = true;

var eligiblePerson = highincome && cibilScore;

console.log(eligiblePerson)
*/
// || (or) oparatots

/*
var highIncome = true;
var cibileScore = false;

var eligiblePerson = highIncome || cibileScore;

console.log(eligiblePerson)
*/

// ! (not) operators

/*
var highIncome = true;
var cibileScore = true;

var eligiblePerson = highIncome && cibileScore;
var applicationStatus = !eligiblePerson;

console.log(eligiblePerson)
console.log(applicationStatus)
*/

//logical oprators with non bolean value

/*
console.log(true || true)
console.log(true || false)
console.log(false || "kani")
console.log(true || "kani")
console.log(false || 3)
console.log(false || 0)
console.log(false || null)
console.log(false || "")
console.log(false || NaN)

*/

/*
var userColor = "red";
var defaultColor = "blue";

var slectedColor = userColor || defaultColor;

console.log(slectedColor)

*/

// bitwise oparators

// 00000001 ---> 1
// 00000010 ---> 2
// 00000011 ---> 3
// 00000100 ---> 4
// 00000101 ---> 5
// 00000110 ---> 6
// 00000111 ---> 7
// 00001000 ---> 8
// 00001001 ---> 9

/*
console.log(1 | 2);
console.log(1 & 2);

*/

/*
var WrightPermission= 4;
var readPermission = 2;
var excutePermission = 1;

var myPermission = 0;

mypermission = myPermission | WrightPermission | readPermission;


var message = (myPermission & WrightPermission) ? "yes":"no";

console.log(message)

*/






