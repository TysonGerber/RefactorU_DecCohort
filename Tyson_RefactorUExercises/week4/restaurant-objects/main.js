// FOOD Function

var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;


}
//FOOD PRINT OUT
FoodItem.prototype.stringify = function () {
    var result = this.name + ' has ' + this.calories + '. and is this food item vegan ' + this.vegan + ' glutenFree ' + this.glutenFree + ' and citrus free: ' + this.citrusFree;
    return result;
};

//FOOD Items 

var cheese = new FoodItem('Cheesee', 300, 'false', 'true', 'true')
var beans = new FoodItem('Beans', 100, 'true', 'true', 'true')
var chicken = new FoodItem('Chicken', 200, 'false', 'true', 'true')
var rice = new FoodItem('Rice', 50, 'true', 'true', 'true')
var lemon = new FoodItem('Lemon', 25, 'false', 'false', 'true')
var lime = new FoodItem('Lime', 25, 'false', 'false', 'true')
var sugar = new FoodItem('Sugar', 150, 'false', 'false', 'false')
var water = new FoodItem('Water', 0, 'false', 'false', 'false')


////////////////////////////DRINKS////////////////////////////////////////////////////////


//Drink function
var Drink = function (name, calories, price, drinkIngredients) {
    this.name = name;
    this.calories = calories;
    this.price = price;
    this.drinkIngredients = drinkIngredients;
}


//Drink print out
Drink.prototype.stringify = function () {
    var arrayLength = this.drinkIngredients.length;
    var stringDrinkArray = '';
    for(var i = 0; i< arrayLength; i++){
        stringDrinkArray = stringDrinkArray + this.drinkIngredients[i].name + ',';
    }
    var drinkResult = this.name + ' has ' + this.calories + '. it costs ' + this.price + ' ingredients ' + this.drinkIngredients;
    return drinkResult;
}

//Drink Items and ingredients [array]
var soda = new Drink('soda', 200, 2, [sugar, water])
var water = new Drink('water', 0, 0, [water])
var lemonaid = new Drink('Lemonaid', 150, 3.50, [lemon, sugar, water])


//console logging the drink items
console.log(soda.stringify())
console.log(water.stringify())
console.log(lemonaid.stringify())



////////////////////////////PLATES////////////////////////////////////////////////////////

//Plate Function

var Plate = function (name, description, price, foodIngredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.foodIngredients = foodIngredients;
}

Plate.prototype.stringify = function () {
    var arrayLength = this.foodIngredients.length;
    var stringPlateArray = '';
    for(var i = 0; i < arrayLength; i++) {
        stringPlateArray = stringPlateArray + this.foodIngredients[i].name + ',';
    }
    var plateResult = 'you ordered ' + this.name + ' it has ' + this.description + 'it costs' + this.price + 'and food ' + this.foodIngredients
    return plateResult;
}

Plate.prototype.isVegan = function(){
    var arryLength = this.foodIngredients.length;
    for(var i = 0; i < arryLength; i++){
        console.log(this.foodIngredients[i].length)
    }
}

//Plate Items
var burrito = new Plate('Burrito', 'Will fill you up', 8, [cheese, beans, chicken, rice])
var limeTacos = new Plate('Lime Tacos', 'Will fill you up', 8, [cheese, beans, chicken, rice, lime])
var riceBeans = new Plate('Rice and Beans', 'Go simple'[rice, beans])


//Console logging the Food Items
console.log(burrito.stringify());
console.log(rice.stringify());
console.log(limeTacos.stringify());
////////////////////////////RESTAURAUNT////////////////////////////////////////////////////////


var Restaurant = function (restName, restDescription, restMenu) {
    this.restName = restName;
    this.restDescription = restDescription;
    this.restMenu = restMenu;
}

// Restaurant print name
Restaurant.prototype.stringify = function () {
    var restResult = 'Thank you for dinning at ' + this.restName + ' we are a ' + this.restDescription + ' and our menu items are ' + this.restMenu;
    return restResult;
}

// Restaurant Names

var mexican = new Restaurant('Bertha\'s Burritos', 'Mexican Restaurant', menu)


////////////////////////////Menu////////////////////////////////////////////////////////


//INSTANCIATIONS when you add an object to a class (/new Menu/)
var plate = new Menu([burrito, limeTacos, lemonaid])
var menu = new Menu([burrito, limeTacos, riceBeans, water, lemonaid, soda])
var restaurants = new Restaurant([mexican])

Restaurant.stringify();

function Order(plates){
    this.plates = plates;
}

