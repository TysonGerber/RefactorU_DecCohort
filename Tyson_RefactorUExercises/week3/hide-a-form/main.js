angular.module('hideForm',[])
    .controller('formController', formFunction)

    function formFunction() {
        
        var fCtrl = this;

        fCtrl.greeting = 'the form is working'

        fCtrl.formClick = function() {
            console.log(formClick)
        }
console.log(formClick)



    };