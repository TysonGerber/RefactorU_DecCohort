angular.module('facApp')
    .factory('facFactory', facFunction);

facFunction.$inject = ['$http']
function facFunction($http) {
   
    // Get the list of all of our aliens
    function getAllAliens() {
        // return aliens;
        // http.get returns the Promise for the asynchronous http request
        // we want to use the data from the successful promise in our controller,
        // but we can't return it from inside the promise, so we return the whole promise to the controller.
        return $http.get('/aliens');
        
    }

    // Add a new alien to our list of aliens
    function createAliens(alien) {

        // aliens.push(alien
        console.log('createAlien:', alien)
        // in this case, since we don't really care about what was returned in the response,
        // we can process the promise here.  To be consistent, we probably should return the 
        // promise here and have the controller handle it as well, but 
        return $http.post('/alien', alien)
    }


    return {
        getAliens: getAllAliens,
        addAlien: createAliens
    }
}