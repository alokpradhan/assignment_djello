djelloApp = angular.module('djelloApp', ['ui.router', 'restangular', 'Devise']);

djelloApp.config(['RestangularProvider', function(RestangularProvider){

   RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({
        "content-type": "application/json"
    });

}]);

djelloApp.config(function(AuthProvider) {
    // Configure Auth service with AuthProvider
    AuthProvider.loginPath('/api/v1/users/sign_in.json');
    AuthProvider.loginMethod('GET');
    AuthProvider.logoutPath('/api/v1/users/sign_out.json');
    AuthProvider.logoutMethod('DELETE');
});

djelloApp.config(['$stateProvider', '$urlRouterProvider',
                  function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/board');

  $stateProvider.state('board', {
    url: '/board',
    templateUrl: 'templates/board.html',
    controller: 'boardCtrl'
  });

  $stateProvider.state('sign_in', {
    url: '/users/sign_in',
    templateUrl: 'templates/signIn.html',
    controller: 'authCtrl'
  });

}]);