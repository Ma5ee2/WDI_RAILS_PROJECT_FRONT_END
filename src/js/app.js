angular
  .module('front', [])
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$http'];
function MainCtrl($http) {
  const vm = this;

  $http
    .get('http://localhost:3000/api/restaurants')
    .then(res => {
      vm.restaurants = res.data;
      console.log(vm.restaurants);
    });


  $http
    .get('http://localhost:3000/api/reviews')
    .then(res => {
      vm.reviews = res.data;
      console.log(vm.reviews);
    });

}
