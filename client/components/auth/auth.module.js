'use strict';

angular.module('tiendaApp.auth', [
  'tiendaApp.constants',
  'tiendaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
