fichaRPG = angular.module('fichaRPG', ['fichaRPG.filters', 'fichaRPG.services', 'fichaRPG.directives']);

fichaRPG.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {templateUrl: 'partials/homepage'}).
    when('/gerarFicha', {templateUrl: 'partials/gerarFicha', controller: GerarFichaCtrl}).
    when('/ficha/:id', {templateUrl: 'partials/ficha', controller: FichaCtrl}).
    otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);
}]);

fichaRPG.controller("IndexCtrl", function IndexCtrl($scope, $location) {
  $scope.isHomepage = function () {
    if ($location.url() == '/') {
        return true
    } else {
        return false
    }
  };
});
