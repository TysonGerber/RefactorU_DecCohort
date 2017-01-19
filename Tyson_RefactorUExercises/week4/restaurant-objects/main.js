// FOOD Function

var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;


}
//FOOD PRINT OUT
FoodItem.prototype.stringify = function () { //template strings 
    var result = `${this.name} has ${this.calories} calories and is ${this.vegan ? '' : 'not '}vegan, ${this.glutenFree ? '' : 'not '}gluten free and ${this.citrusFree ? '' : 'not '}citrus free`
    return result;
};

//FOOD Items 

var avacado = new FoodItem('Avacado', 125, true, true, true)
var cheese = new FoodItem('Cheesee', 300, false, true, true)
var beans = new FoodItem('Beans', 100, true, true, true)
var chicken = new FoodItem('Chicken', 200, false, true, true)
var rice = new FoodItem('Rice', 50, true, true, true)
var lemon = new FoodItem('Lemon', 25, true, true, false)
var lime = new FoodItem('Lime', 25, false, false, true)
var sugar = new FoodItem('Sugar', 150, true, true, true)
var water = new FoodItem('Water', 0, true, true, true)
var lettuce = new FoodItem('lettuce', 1, true, true, true)
var bun = new FoodItem('Bun', 66, true, false, true)
var beef = new FoodItem('Beef', 125, false, true, true)

// stringify some food items
console.log(lemon.stringify())
console.log(sugar.stringify())

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
    var result = `${this.name} has ${this.calories} calories and costs ${this.price} the drink ingredients contain ${this.drinkIngredients} this drink is ${this.vegan ? '' : 'not '}vegan free ${this.glutenFree ? '' : 'not '}gluten free ${this.citrusFree ? '' : 'not '}citrus free`
    return result;
};


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
    this.name = name; //name property of this is assigned to name 
    this.description = description;
    this.price = price;
    this.foodIngredients = foodIngredients;
}

Plate.prototype.stringify = function () {
    var result = 'you ordered ' + this.name + ' it has ' + this.description + 'it costs' + this.price + 'and food ' + this.stringPlateArray
    for (var i = 0; i < this.ingredients.length; i++) {
        result = result + "\n " + this.ingredients[i].stringify()
    }

    return result;
};




Plate.prototype.isVegan = function () {
    var isVegan = true; //start off with the easiest thing to disproce 
    for (var i = 0; i < this.ingredients.length; i++) {
        if (!this.ingredients[i].vegan)
            isVegan = false;
    }
    return isVegan
}

Plate.prototype.isGlutenFree = function () {
    var isglutenFree = true;
    for (var i = 0; i < this.ingredients.length; i++) {
        if (!this.ingredients[i].glutenFree)
            isglutenFree = false;
    }
    return isglutenFree
}

Plate.prototype.isCirtrusFree = function () {
    var iscitrusFree = true;
    for (var i = 0; i < this.ingredients.length; i++) {
        if (!this.ingredients[i].glutenFree)
            iscitrusFree = false;
    }
    return iscitrusFree
}

console.log('vegan?', burger.isVegan())
console.log('vegan?', burger.isGlutenFree())
console.log('vegan?', burger.isCitrusFree())

// Plate.prototype.isVegan = function(){
//     var arrayLength = this.foodIngredients.length;
//     for(var i = 0; i < arrayLength; i++){
//         console.log(this.foodIngredients[i].vegan)
//         return this.foodIngredients[i].vegan;
//     }
// };

// Plate.prototype.isGlutenFree = function(){
//     var arrayLength = this.foodIngredients.length;
//     for(var i = 0; i < arrayLength; i++){
//         console.log(this.foodIngredients[i].glutenFree);
//         return this.foodIngredients[i].glutenFree;
//     }
// };

// Plate.prototype.isCitrusFree = function(){
//     var arrayLength = this.foodIngredients.length;
//     for(var i = 0; i < arrayLength; i++){
//         console.log(this.foodIngredients[i].citrusFree)
//         return this.foodIngredients[i].citrusFree;
//     }
// };

//Plate Items
var burrito = new Plate('Burrito', 'Will fill you up', 8, [cheese, beans, chicken, rice])
var limeTacos = new Plate('Lime Tacos', 'Will fill you up', 8, [cheese, beans, chicken, rice, lime])
var riceBeans = new Plate('Rice and Beans', 'Go simple'[rice, beans])
var burger = new Plate('Burer', 'a tastty blend of fabulous ingredients', 12, [beef, cheese, bun, lettuce, avacado])




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



//Order


//Menu
var Order = function(name, plates){
    this.name = name; //name property of this is assigned to name 
    this.plates = plates;
}


Order.prototype.isVegan = function(){
    // loop through our plates to see if any are vegan
   for (var i = 0; this.plates.length; i++){
       if(!this.plates[i].isVegan()){
           return false;
       }

    }
    return true;
}

Order.prototype.isGlutenFree = function(){
    // loop through our plates to see if any are vegan
   for (var i = 0; this.plates.length; i++){
       if(!this.plates[i].isGlutenFree()){
           return false;
       }

    }
    return true;
}

Order.prototype.isCitrusFree = function(){
    // loop through our plates to see if any are vegan
   for (var i = 0; this.plates.length; i++){
       if(!this.plates[i].isCitrusFree()){
           return false;
       }

    }
    return true;
}

// stringify our order by stringify all of our 

Order.prototype.stringify = function (){
    var result = `${this.name}`
    //loop through the plates
    for(var i = 0; i< this.plates.length; i++){
        result = result + '/n' + this.plates[i].stringify()
    }
    return result
}

// show plates that are vegan
Order.prototype.showVeganPlates = function(){
    var array = [];
    for(var i = 0; i < this.plates.length; i++){
        if(this.plates[i].isVegan()){

            // add this plate to the list of plates if it is vegan
            veganPlates.push(this.plates[i])
        } 
    }
    return veganPlates
}
var burgerSpecial = new Menu('burger special', [burger,burrito]);

console.log(burgerSpecial)
console.log(burgerSpecial.showVeganPlates)

////////////////////////////Customer//////////////////////////////////////////////////////

function Customer(customerPreference) {
    this.customerPreference = customerPreference;
}
Customer.prototype.stringify = function () {
    return 'Hi, I am ' + this.customerPreference
}