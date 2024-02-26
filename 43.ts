const magiciansnames: string[] = ["Dynamo", "Derren Brown", "Teller"];
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}
function make_great() {
  for (let i in magiciansnames) {
    console.log(`The Great ${magiciansnames[i]}`);
  }
}
console.log("Original Names:");
show_magicians(magiciansnames);
console.log("Great Names:");
make_great();
