angular.module('portfolio', [])
    .controller('pController', pFunction)

pFunction.$inject = ['$http'];

    function pFunction ($http){
        var pCtrl = this;
        pCtrl.title = 'Welcome to my portfolio page'
        pCtrl.user = {};
        
        pCtrl.createUser = ()=>{
            console.log('trying to create user')
            console.log(pCtrl.user)
            $http.post('/api/user', pCtrl.user).then((success)=>{
                console.log('success adding user to db:', success.data);
                var userData = success.data;
            }, (error)=>{
                console.log('Error saving user to db', error);
            })
        }
    };