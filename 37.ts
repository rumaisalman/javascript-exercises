function makeShirt(
  size: string = "Large",
  message: string = "I love TypeScript"
): void {
  return console.log(`Size:${size} , Message:"${message}"`);
}
makeShirt();
makeShirt("Medium", "I love TS!");
makeShirt("Small");
