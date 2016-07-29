'use strict';

angular.module('tiendaApp')
  .controller('ProductsCtrl', function ($scope, ProductsService, socket) {
    self = $scope;
    self.newProduct = {};

    ProductsService.query(function(products){
      self.products = products;
      socket.syncUpdates('products', self.products);
    });


    self.addProduct = function(){
      ProductsService.save(self.newProduct, function(){
        self.newProduct = {};
      });
    };

    self.$on('$destroy', function() {
      socket.unsyncUpdates('product');
    });
  });
