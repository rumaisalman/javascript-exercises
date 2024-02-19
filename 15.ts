//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.///
const guests = ["Mother", "Father", "Sister"];
console.log(`${guests[0]},I miss you alot.Let's meet on a dinner.`);
console.log(`${guests[1]},I miss you alot.Let's meet on a dinner.`);
console.log(`${guests[2]},I miss you alot.Let's meet on a dinner.`);

console.log(`My ${guests[2]} will not be able to make it to the dinner.`);
guests.splice(2, 2, `Brother`);

console.log(guests);

console.log(`${guests[0]},I miss you alot.Let's meet on a dinner.`);
console.log(`${guests[1]},I miss you alot.Let's meet on a dinner.`);
console.log(`${guests[2]},I miss you alot.Let's meet on a dinner.`);
