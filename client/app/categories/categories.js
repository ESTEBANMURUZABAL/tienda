'use strict';

angular.module('tiendaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('categories', {
        url: '/categories',
        templateUrl: 'app/categories/categories.html',
        controller: 'CategoriesCtrl'
      })
      .state('edit-category', {
        url: '/categories/:id',
        templateUrl: 'app/categories/edit-category.html',
        controller: 'CategoriesCtrl'
      })
      .state('view-category', {
        url: '/categories/:id',
        templateUrl: 'app/categories/view-category.html',
        controller: 'CategoriesCtrl'
      });
  });
