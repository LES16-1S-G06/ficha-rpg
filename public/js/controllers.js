function GerarFichaCtrl($scope, $http, $location) {
    $scope.currentTab = "general";
    $scope.races = [];
    $scope.classes = [];
    $scope.personagem = {};

    $scope.isCurrentTab = function(tab) {
        return $scope.currentTab === tab;
    };

    $scope.setCurrentTab = function(tab) {
        $scope.currentTab = tab;
    };

    $http.get('/api/racas').
    success(function(data, status, headers, config) {
        $scope.racas = data.racas;
    });

    $http.get('/api/classes').
    success(function(data, status, headers, config) {
        $scope.classes = data.classes;
    });

    $scope.inserirPersonagem = function () {
      $http.post('/api/personagem', $scope.personagem).
        success(function(data) {
          $location.url('/ficha/' + data.id);
        });
    };
}

function FichaCtrl($scope, $http, $routeParams) {
  $scope.personagem = {};
  $scope.racaPersonagem = {};
  $scope.classePersonagem = {};

  $http.get('/api/personagem/' + $routeParams.id).
    success(function(data) {
      $scope.personagem = data.personagem;
  });

  $http.get('/api/racas').
  success(function(data, status, headers, config) {
    for(var i=0; i<data.racas.length; i++) {
      if (data.racas[i].nome == $scope.personagem.raca) {
        $scope.racaPersonagem = data.racas[i];
      }
    }
  });

  $http.get('/api/classes').
  success(function(data, status, headers, config) {
    for(var i=0; i<data.classes.length; i++) {
      if (data.classes[i].descricao == $scope.personagem.classe) {
        $scope.classePersonagem = data.classes[i];
      }
    }
  });
}
