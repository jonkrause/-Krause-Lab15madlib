var app = angular.module('madlib');

app.service('madService', function(){
    
    var word = {};
    
    this.getWord = function(){
        return word;
        
    }
    
    this.setWord = function(wordObj){
        
        word = wordObj;
//        console.log(adjective);
    }
    
    
    
    
    
    
});