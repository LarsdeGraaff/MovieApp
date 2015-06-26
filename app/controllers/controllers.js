/**
 * Created by jeansmits on 26/06/15.
 */
angular.module('movieApp.controllers', ['ngRoute'])
    .constant("apiUrl",'http://angularmoviebackend.azurewebsites.net/api/')
    .config(function($routeProvider){
        $routeProvider.when('/home',{
           templateUrl:'app/views/home.html'
        });

        $routeProvider.when('/search', {
           templateUrl:'app/views/search.html',
            controller: 'searchCtrl'
        });

        $routeProvider.otherwise({
            redirectTo:'/home'
        });

    });

