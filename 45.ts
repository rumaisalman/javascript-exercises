// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
let car={
    manufacturer:"",model_name:""
}

function car_info_add(manufacturer:,model_name:,additional:){
car.manufacturer = manufacturer
car.model_name = model_name
car={
    ...manufacturer,...additional
}
return console.log(car)
}
car_info_add("honda",'70CC',{color:'red',warranty:'2 yrs'})