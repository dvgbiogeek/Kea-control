angular.module('KeaApp', [])
  .controller('KeaController', ['$scope', function($scope) {
    
    $scope.quotes = [
      {label: "hey! gimme food!"},
      {label: "I'll peck your tires"},
      {label: "I'll destroy your car"},
      {label: "You want to take me home?"},
      {label: "People food is delicious"},
      {label: "Aren't I cute?"},
      {label: "Stupid human"},
    ];

    $scope.randomQuote = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];
    
    $scope.newQuote = function() {
      $scope.randomQuote = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];
    };
  }]);