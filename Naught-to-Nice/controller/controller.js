angular.module('niceApp', [])
    .controller('niceController', niceCtrl);

    function niceCtrl(){
        var nCtrl = this;
        
        nCtrl.greeting = 'working'

    }