let car = {
  manufacturer: "",
  model_name: "",
};

function car_info_add(
  manufacturer: string,
  model_name: string,
  color: string,
  warranty: string
) {
  car.manufacturer = manufacturer;
  car.model_name = model_name;
  const car1 = { manufacturer, model_name, color, warranty };
  return console.log(car1);
}
car_info_add("honda", "70CC", "red", "2 yrs");
