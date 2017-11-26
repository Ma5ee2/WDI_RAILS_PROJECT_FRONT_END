angular
  .module('front')
  .config(Router);

Router.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];

function Router(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
){
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('restaurantsIndex', {
      url: '/',
      // templateUrl: 'js/views/home.html',
      controller: 'restaurantsController as vm'
    })
    .state('restaurantsShow', {
      url: '/restaurants/:id',
      // templateUrl: 'js/views/users/show.html',
      controller: 'restaurantsShowController as vm'
    })
    .state('restaurantsEdit', {
      url: '/restaurants/:id',
      // templateUrl: 'js/views/users/edit.html',
      controller: 'restaurantsEditController as vm'
    })
    .state('restaurantsNew', {
      url: '/restaurants/new',
      // templateUrl: 'js/views/events/event-new.html',
      controller: 'restaurantsNewController as vm'
    })
    .state('reviewIndex', {
      url: '/',
      // templateUrl: 'js/views/home.html',
      controller: 'reviewController as vm'
    })
    .state('reviewShow', {
      url: '/review/:id',
      // templateUrl: 'js/views/users/show.html',
      controller: 'reviewShowController as vm'
    })
    .state('reviewEdit', {
      url: '/review/:id',
      // templateUrl: 'js/views/users/edit.html',
      controller: 'reviewEditController as vm'
    })
    .state('reviewNew', {
      url: '/review/new',
      // templateUrl: 'js/views/events/event-new.html',
      controller: 'reviewNewController as vm'
    });

  $urlRouterProvider.otherwise('/');
}
