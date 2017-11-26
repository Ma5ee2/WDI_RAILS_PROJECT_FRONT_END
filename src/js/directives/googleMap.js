angular
.module('front')
.directive('googleMap', googleMap);

googleMap.$inject = ['$window', '$timeout'];
function googleMap($window, $timeout) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '=',
      lat: '=',
      lng: '='
    },
    link(scope, element) {
  $timeout(() => {

    console.log('center', scope.center);

    const map = new $window.google.maps.Map(element[0], {
      zoom: 14,
      center: scope.center
    });
    new google.maps.Marker({
      map: map,
      position: scope.center

        });
      }, 200);
    }
  };
}
