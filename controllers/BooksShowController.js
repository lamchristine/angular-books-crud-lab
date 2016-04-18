angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

  var endpoint = 'https://super-crud.herokuapp.com/books';


BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;

  //show one book
  $http({
    method: 'GET',
    url: endpoint + '/' + $routeParams.id
  }).then(function successCallBack(json) {
    // console.log(json);
    vm.book = json.data;
  }, function errorCallBack(json){
    console.log("ERROR!");
  });


  //edit a book
  vm.editBook = function (bookUpdate) {
    console.log("edit",  bookUpdate)
    $http({
      method: 'PUT',
      url: endpoint + '/' + bookUpdate._id,
      data: {
        title: bookUpdate.title,
        author: bookUpdate.author,
        image: bookUpdate.image,
        releaseDate: bookUpdate.releaseDate
      }
    }).then(function successCallBack(response) {
      vm.book = response.data;
      $location.path('/');
    }, function errorCallBack(response) {
      console.log('Error in editing data', response);
    });
  };

  //delete a book
  vm.deleteBook = function (book) {
    console.log("deleting", book);
    $http({
      method: 'DELETE',
      url: endpoint + ('/') + book._id
    }).then(function successCallBack(response) {
      console.log("deleted", response);
      $location.path('/');
    });
  };

}
