const make_shirt = (size: string, message: string): string => {
  console.log(`size:${size} , message:"${message}"`);
  return `size:${size} , message:"${message}"`;
};
let size: string = "medium";
let message: string = "Be Positive";
make_shirt(size, message);
make_shirt("Large", "Be Positive");
