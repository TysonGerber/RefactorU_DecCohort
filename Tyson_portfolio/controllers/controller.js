angular.module('portfolio', [])
    .controller('pController', pFunction)

    function pFunction (){
        var pCtrl = this;
        pCtrl.title = 'Welcome to my portfolio page'

        pCtrl.fName(){}

    };