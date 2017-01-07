angular.module('hideForm',[])
    .controller('formController', formFunction);

    function formFunction() {
        
        var fCtrl = this;

        fCtrl.greeting = 'the form is working';

        fCtrl.createUser = function() {
        fCtrl.user.fname
         fCtrl.user.lname
        fCtrl.user.bio
        fCtrl.user.favoriteBooks
        fCtrl.user.libraries
        }

    };