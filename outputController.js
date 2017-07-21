var app = angular.module('madlib');

app.controller('outputCtrl', function($scope, madService){
    
    $scope.gottenWord = madService.getWord();
    });
    
