const describe_city = (
  city: string,
  country: string = "unknown country"
): void => {
  console.log(`${city} is in ${country}`);
};
describe_city("karachi", "Pakistan");
describe_city("Riyadh", "Saudi Arabia");
describe_city("Toronto");
