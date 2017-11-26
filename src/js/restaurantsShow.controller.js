angular
  .module('front')
  .controller('restaurantsShowController', restaurantsShowController);

restaurantsShowController.$inject = ['$http', '$stateParams', '$scope'];

function restaurantsShowController($http, $stateParams, $scope) {
  const vm = this;
  vm.lat = 4;
  vm.lng = 4;
  $http
    .get(`http://localhost:3000/api/restaurants/${$stateParams.id}`)
    .then(response => {

      vm.restaurant = response.data;
      console.log('blah', vm.restaurant);
      vm.center = {lat: vm.restaurant.location.lat, lng: vm.restaurant.location.lng};
    });

}
