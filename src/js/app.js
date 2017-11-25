angular
  .module('front', [])
  .controller('MainCtrl', MainCtrl);

function MainCtrl($http) {
  const vm = this;

  $http
    .get('http://localhost:3000/api/restaurants')
    .then(res => {
      vm.restaurants = res.data;
    });
}
