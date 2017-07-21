var app = angular.module('madlib');


app.config(function($routeProvider){
    
   $routeProvider
   .when('/input', {
       controller: 'inputCtrl',
       templateUrl: 'input.html'
   })
    .when('/output', {
       controller: 'outputCtrl',
       templateUrl: 'output.html'
   })
    .when('/clear', {
       controller: 'routeCtrl',
       templateUrl: '/home'
   })
    .otherwise({redirectTo: '/home'})
    
    
    
    
    
    
    
});