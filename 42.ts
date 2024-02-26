// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
const magiciansnames: string[] = ["Dynamo", "Derren Brown", "Teller"];
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}
show_magicians(magiciansnames);
function make_great() {
  for (let i in magiciansnames) {
    console.log(`The Great ${magiciansnames[i]}`);
  }
}
make_great();
