const city_country = (city: string, country: string): string => {
  return `${city},${country}`;
};
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Toronto", "Canada"));
console.log(city_country("Seoul", "Korea"));
