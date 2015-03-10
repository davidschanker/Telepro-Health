'use strict';

angular.module('myApp.amwellLanding', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/amwellLanding', {
    templateUrl: 'Amwell Landing/amwellLanding.html',
    controller: 'AmwellLandingCtrl'
  });
}])

.controller('AmwellLandingCtrl', [function() {

}]);