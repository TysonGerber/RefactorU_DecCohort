angular.module("FullStackForm", [])
.controller("FullStackController", fullStackCtrl);

function fullStackCtrl() {
    var fCtrl = this;
    
    fCtrl.greeting = "Hello";
}