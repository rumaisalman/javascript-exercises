// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
const make_shirt = (size: string, message: string): string => {
  console.log(`size:${size} , message:"${message}"`);
  return `size:${size} , message:"${message}"`;
};
let size: string = "medium";
let message: string = "Be Positive";
make_shirt(size, message);
make_shirt("Large", "Be Positive");
