angular.module('libraryApp', ['ngRoute'])
       .config(config)
      //  .controller('BooksShowController', BooksShowController);

////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/books/index.html',
      controller:  'BooksIndexController',
      controllerAs: 'booksIndexCtrl'
    })
    .when('/:id', {
      templateUrl: 'templates/books/show.html',
      controller: 'BooksShowController',
      controllerAs: 'booksShowCtrl'
    })
    /* Include the additional route here! */
    .otherwise({
      redirectTo: '/'
    });

  // this just makes it so our URLs don't have /#/ in them.
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
