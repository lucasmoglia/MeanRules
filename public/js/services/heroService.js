/*
 * This is where you would use $http or $resource to do your 
 * API calls to the Node backend from your Angular frontend.
 * 
 */

angular.module('heroService', []).factory('hero', ['$http', function($http) {

    return {
        // call to get all heroes
        get : function() {
            return $http.get('/api/heroes');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new hero
        create : function(heroData) {
            return $http.post('/api/heroes', heroData);
        },

        // call to DELETE a hero
        delete : function(id) {
            return $http.delete('/api/heroes/' + id);
        }
    }       

}]);
