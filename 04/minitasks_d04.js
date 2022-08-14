// Task 1: Simple Programs todo for variables

//1. Declare four variables without assigning values and print them in console:
{
  let a, b, ab, ba;
  console.log(a, b, ab, ba);
}

//2. How to get value of the variable myvar as output
{
  const myvar = 1;
  console.log("myvar");
}

//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
{
  let firstName = "Divyesh";
  let LastName = "Bhuva";
  let mstatus = "unmarried";
  let country = "india";
  let age = "27";
  console.log(firstName);
  console.log(LastName);
  console.log(mstatus);
  console.log(country);
  console.log(age);


//4. Declare variables to store your first name, last name, marital status, country and age in a single line
    let x = firstName + ' ' + LastName;
    let y = mstatus;
    let z = country;
    let w = age;
    console.log("Name: " + x + ", martial status: " + y + ", Country: " + z + ", age: " + w);
}

//5. Declare variables and assign string, boolean, undefined and null data types:
{
  var a = "Dev";
  var b = true; //boolean value
  var c; //undefined;
  var d = null; //null data type;
}
//6. Convert the string to integer:
console.log(parseInt("007")); //13)
console.log(Number("008")); //14
console.log("a" + "b"); //ab

//7. Write 6 statement which provide truthy & falsey values.:

{
  let statement1 = 1 == 1;
  let statement2 = "a" == "b";
  let statement3 = 1 < 2;
  let statement4 = 1 > 2;
  let statement5 = !true;
  let statement6 = 1 < 3 || 1 < 5;
}

//***Task 2: Simple Programs todo for Operators:

//1.Square of a number:
{
  let num = 7;
  console.log(num * num);
}
//2.swapping 2 numbers:
{
  let aa = 7;
  let bb = 8;
  let temp = aa;
  aa = bb;
  bb = temp;
}

//3.Addition of 3 numbers:
{
  let a = 1;
  let b = 2;
  let c = 3;
  console.log(a + b + c);
}

//4.Celsius to Fahrenheit conversion:
{
  let cTemp = 33.35;
  let cToFahr = (cTemp * 9) / 5 + 32;
  let message = cTemp + "\xB0C is " + cToFahr + " \xB0F.";
  console.log(message);
}

//5.Meter to miles:
//6.Pounds to kg:
//7.Calculate Batting Average:
//8.Calculate five test scores and print their average:
//9.Power of any number x ^ y.:
//10.Calculate Simple Interest:
// Calculate area of an equilateral triangle
// Area Of Isosceles Triangle
// Volume Of Sphere
// Volume Of Prism
// Find area of a triangle.
// Give the Actual cost and Sold cost, Calculate Discount Of Product
// Given their radius of a circle and find its diameter, circumference and area.
// Given two numbers and perform all arithmetic operations
/*
    Display the asterisk pattern as shown below(No loop needed):
    *****
    *****
    *****
    *****
    *****
     */
//Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month.
// Calculate the total energy bill of that consumer if per unit rate is 10?
{
    let P=0.1; //100/1000 gives a KW
    let t=24; //hrs per day
    // Energy consumed per day
    let E=P*t;
    // monthly bill
    console.log("Monthly energy bill is " + E*30); // where 30 is days in a month.
}

//Program To Calculate CGPA

//Task 3: Simple Programs todo for Condition , Looping and Arrays:

//Write a loop that makes seven calls to console.log to output the following triangle:
/*
    #
    ##
    ###
    ####
    #####
    ######
    #######
    */

// Iterate through the string array and print it contents:
//var strArray= ["<option>Jazz</option>",
// ,"<option>Blues</option>",
// ,"<option>New Age</option>",
// ,"<option>Classical</option>",
// ,"<option>Opera</option>"]

//
