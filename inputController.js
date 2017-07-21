var app = angular.module('madlib');

app.controller('inputCtrl', function($scope, $location, madService){
    
    
    $scope.getInput = function(wordObj){
        madService.setWord(wordObj);
    
        $location.path('/output');
        console.log(wordObj);
    };
   
    
    
    
    
    
});