
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
}
FoodItem.prototype.stringify = function(){
  var result = this.name + " has " + this.calories +  " and it is "+ this.vegan + " vegan "+ " and " + this.glutenFree +" glutenFree " + " and " + this.citrusFree + "citrusFree";
  return result;
};
var potatoCurry = new FoodItem("potatoCurry", 123, true, true, false);
var chickenCurry = new FoodItem("chickenCurry", 222, false, true, false);
var orangeJuice = new FoodItem("orangeJuice", 87, true, true, true);
// console.log(potatoCurry.stringify());
// console.log(chickenCurry.stringify());
// console.log(orangeJuice.stringify());
//-----------------------------------------------------------------------------
//Drink
var Drink = function(name, description, price, drintItems){
    this.name = name;
    this.description = description;
    this.price = price;
    this.drintItems = drintItems;
}
Drink.prototype.stringify = function(){
  var arryLength = this.drintItems.length;
  var stringDrinkArry = "";
  for(var i=0; i<arryLength; i++){
    stringDrinkArry = stringDrinkArry + this.drintItems[i].name + " , ";
  }
  var drinkResult = this.name + " is a " + this.description +  " It costs "+ this.price + "$  and contains drintItems like "+ stringDrinkArry;
  return drinkResult;
};
//plate
var Plate = function(name, description, price, ingredients){
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
Plate.prototype.stringify = function(){
  var arryLength = this.ingredients.length;
  var stringPlateArry = "";
  for(var i=0; i<arryLength; i++){
    stringPlateArry = stringPlateArry + this.ingredients[i].name + " , ";
  }
  var plateResult = this.name + " is a " + this.description +  " It costs "+ this.price + "$  and contains ingredients like "+ stringPlateArry;
  return plateResult;
};
Plate.prototype.isVegan = function(){
  var arryLength = this.ingredients.length;
  for(var i=0; i<arryLength; i++){
    console.log(this.ingredients[i].vegan);
      return this.ingredients[i].vegan;
  }
};
Plate.prototype.isGlutenFree = function(){
  var arryLength = this.ingredients.length;
  for(var i=0; i<arryLength; i++){
    console.log(this.ingredients[i].glutenFree);
      return this.ingredients[i].glutenFree;
  }
};
Plate.prototype.isCitrusFree = function(){
  var arryLength = this.ingredients.length;
  for(var i=0; i<arryLength; i++){
    console.log(this.ingredients[i].citrusFree);
      return this.ingredients[i].citrusFree;
  }
};
// Order
function Order(plates) {
    this.plates = plates;
}
// Menu
function Menu(plates) {
    this.plates = plates;
}
// Restaurant
function Restaurant(name, description, menu) {
    this.name = name;
    this.description = description;
    this.menu = menu;
}
Restaurant.prototype.stringify = function(){
var resultStr = "welcome to "+ this.name + " " + this.description}
// Customer
function Customer(dietaryPreference) {
    this.dietaryPreference = dietaryPreference;
}
Customer.prototype.stringify = function() {
    return "Hi, I am" + this.dietaryPreference;
}
//plate it
var tortilla = new FoodItem('Tortilla', 300, true, false, true);
var avocado = new FoodItem('Avocado', 90, true, true, true);
var cheese = new FoodItem('Cheese', 250, false, true, true);
var onion = new FoodItem('Onion', 50, true, true, true);
var cilantro = new FoodItem('Cilantro', 30, true, true, true);
var tequila = new FoodItem('Tequila', 200, true, true, true);
var soda = new FoodItem('soda', 100, true, true, true);
var lime = new FoodItem('Lime', 40, true, true, false);
var burrito = new Plate('Burrito', 'A hearty meal.', 10, [tortilla, avocado, cheese]);
var guacamole = new Plate('Guácomole', 'A healthy meal.', 4, [avocado, onion, cilantro, lime]);
var margarita = new Drink('Margarita', 'Delicious and makes you feel good.', 8, [tequila, soda, lime]);
var menu = new Menu([burrito, guacamole, margarita]);
var restaurant = new Restaurant('Three Margarita', 'A fine Mexican dining experience.', menu);
var customerMonali = new Customer(vegan);
var out = restaurant.toString();
// console.log("\n");
// console.log(out);
//console.log(burrito.isVegan());
console.log(guacamole.stringify());
console.log(margarita.stringify());
