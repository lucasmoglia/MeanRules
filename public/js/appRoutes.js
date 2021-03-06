angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })
        
        // home page
        .when('/fight', {
            templateUrl: 'views/fight.html',
            controller: 'fightController'
        })
        
        // heroes page that will use the HeroController
        .when('/heroes', {
            templateUrl: 'views/hero.html',
            controller: 'heroController'
        });

    $locationProvider.html5Mode(true);
}]);