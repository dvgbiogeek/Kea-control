angular.module('KeaApp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {

      $routeProvider.when('/', {
        templateUrl: '/static/kea.html',
        controller: 'KeaController'
      })

      .when('/resume', {
        templateUrl: '/static/resume.html'
      })

      .otherwise({redirectTo: ('/')});
  }])

  .controller('KeaController', ['KeaService', function(KeaService) {
    var self = this;
    self.getQuote = KeaService.getQuote();
    
    this.newQuote = function() {
      self.getQuote = KeaService.getQuote();
    };
  }])

  .factory('KeaService', [function() {
    var quotes = [
      {label: "Hey! gimme food!"},
      {label: "I'll peck your tires"},
      {label: "I'll destroy your car"},
      {label: "You want to take me home?"},
      {label: "People food is delicious"},
      {label: "Aren't I cute?"},
      {label: "Stupid human"},
      {label: "Define bird brain for me"},
      {label: "What are you looking at?"}
    ];

    return {
      getQuote: function() {
        return quotes[Math.floor(Math.random() * quotes.length)];
      }
    };
  }]);

