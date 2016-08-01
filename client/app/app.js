'use strict';

angular.module('tiendaApp', [
  'tiendaApp.auth',
  'tiendaApp.admin',
  'tiendaApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngMaterial',
  'ngAnimate',
  'ngFileUpload',
  'ngImgCrop',
  'ngTouch'
])
  .config(function($urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider
      .otherwise('/');

    $mdThemingProvider.theme('error-toast');
    $locationProvider.html5Mode(true);
  });
