'use strict';

angular.module('tiendaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/products.html',
        controller: 'ProductsCtrl'
      })
      .state('view-product', {
        url: '/products/:id',
        templateUrl: 'app/products/view-product.html',
        controller: 'ProductsCtrl'
      })
      .state('edit-product', {
        url: '/products/:id',
        templateUrl: 'app/products/edit-product.html',
        controller: 'ProductsCtrl'
      })
      .state('cart-view', {
        url: '/cart-view/',
        templateUrl: 'app/products/cart-view.html',
        controller: 'ProductsCtrl'
      });
  });
