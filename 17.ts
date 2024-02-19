// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guests = ["Mother", "Father", "Sister"];

console.log(`${guests[0]},I miss you alot.Let's meet on a dinner.`);
console.log(`${guests[1]},I miss you alot.Let's meet on a dinner.`);
console.log(`${guests[2]},I miss you alot.Let's meet on a dinner.`);

console.log(`My ${guests[2]} will not be able to make it to the dinner.`);

guests.splice(2, 2, `Brother`);
console.log(guests);
console.log(`Im inviting some other guests too.`);
guests.unshift(`Aunt`);
guests.splice(2, 0, `Uncle`);
console.log(guests);
guests.push("Grandmother");
console.log(guests);

console.log(`${guests[0]},I miss you alot.Let's meet on a dinner.`);
console.log(`${guests[1]},I miss you alot.Let's meet on a dinner.`);
console.log(`${guests[2]},I miss you alot.Let's meet on a dinner.`);
console.log(`${guests[3]},I miss you alot.Let's meet on a dinner.`);
console.log(`${guests[4]},I miss you alot.Let's meet on a dinner.`);
console.log(`${guests[5]},I miss you alot.Let's meet on a dinner.`);

console.log(
  "I can only invite two guests for the dinner as my dinner table won't arrive in time.\n"
);
console.log(guests);

console.log(`I'm sorry ${guests[5]},I can't invite you anymore.`);
guests.pop();
console.log(guests);
console.log(`I'm sorry ${guests[4]},I can't invite you anymore.`);
guests.pop();
console.log(guests);
console.log(`I'm sorry ${guests[3]},I can't invite you anymore.`);
guests.pop();
console.log(guests);
console.log(`I'm sorry ${guests[2]},I can't invite you anymore.`);
console.log(guests);

console.log(`${guests[0]},You're still invited.`);
console.log(`${guests[1]},You're still invited.`);
guests.pop();
console.log(guests);
guests = [];
