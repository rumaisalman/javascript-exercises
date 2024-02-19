// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
const guests = ["Mother", "Father", "Sister"];
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
