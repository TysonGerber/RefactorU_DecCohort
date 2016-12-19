angular.module('nameApp')
.controller('nameAppController', nameAppCtrl)

function nameAppCtrl(){
    var nCtrl = this;

    nCtrl.greeting = 'Hello Tyson';
    console.log('nameAppController')

    nCtrl.namePop = function() {
    var person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
};