//Tests for equality and inequality with strings
let fruit1: string = "apple";
let fruit2: string = "strawberry";
let fruit3: string = "mango";

if (fruit1 == fruit2) {
  //FALSE
  console.log("fruits are equal");
} else {
  console.log("fruits are not equal.");
}

if (fruit1 != fruit2) {
  //TRUE
  console.log("fruits are equal");
} else {
  console.log("fruits are not equal.");
}
//Tests using the lower case function
let fruit4: string = "APPLE";
let fruit5: string = "apple";
console.log(fruit4.toLowerCase() == fruit5); //TRUE
console.log(fruit4.toLowerCase() != fruit5); //FALSE

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 20;
//equality and inequality
console.log(num1 === num2); //FALSE
console.log(num1 !== num2); //TRUE
// greater than and less than
console.log(num1 > num2); //FALSE
console.log(num1 < num2); //TRUE
// greater than or equal to
console.log(num1 >= num2); //FALSE
//  less than or equal to
console.log(num1 <= num2); //TRUE
// Tests using "and" and "or" operators
console.log(num2 > num1 && num2 >= num1); //TRUE(both conditions are true)
console.log(num1 > num2 || num2 >= num1); //TRUE(atleast one condition is true)
// Test whether an item is in a array
const names: string[] = ["Ali", "Ayesha", "fatima", "Ahmed"];
console.log(names.includes("Ali")); //TRUE
// Test whether an item is not in a array
console.log(names.includes("Rumaisa")); //FALSE
