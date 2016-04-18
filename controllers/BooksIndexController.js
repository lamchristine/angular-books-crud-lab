angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

var endpoint = "https://super-crud.herokuapp.com/books";

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;

  //show all books
  $http({
    method: 'GET',
    url: endpoint,
  }).then(function successCallBack (response) {
    vm.books = response.data.books;
  }, function errorCallBack (response){
    console.log('Error in getting data', response);
  });

  //create new book
  vm.createBook = function () {
      $http({
        method: 'POST',
        url: endpoint,
        data: vm.newBook,
      }).then(function successAdd(response){
        vm.books.push(response.data);
      }, function errorAdd(response) {
        console.log('There was an error in posting', response);
      });
  };


}
