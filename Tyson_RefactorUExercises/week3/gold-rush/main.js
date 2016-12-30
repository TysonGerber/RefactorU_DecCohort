angular.module('spidermanApp',[])
    .controller('spidermanController', spiderFunction)

    function spiderFunction(){
     var sCtrl = this;

     sCtrl.greeting='This is working!'

     sCtrl.displayArr = [];

     
    sCtrl.addDisplay = function($event){
        console.log($event);

        var display = {
            x: $event.clientX,
            y: $event.clientY,
            hide: false
        }

 console.log("Adding a new spiderman to the list: ", display);

        
        sCtrl.displayArr.push(display);
        console.log("The new spiderman list is ", sCtrl.displayArr);
    }

    sCtrl.hideDisplay = function($index){
        console.log("Trying to hide spidermen at postion " + $index, sCtrl.displayArr[$index]);

        sCtrl.displayArr[$index].hide = true;
    }

    sCtrl.showDisplay = function() {
        console.log("Attempting to show all spidermen!");

        for(var i = 0; i < sCtrl.displayArr.length; i++) {
            sCtrl.displayArr[i].hide = false;
        }

        // this is the foreach loop equivalent of the normal for loop above
        sCtrl.displayArr.forEach(function(display) {
            display.hide = false;
        });
    }
}

    

