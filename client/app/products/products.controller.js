'use strict';

angular.module('tiendaApp')
  .controller('ProductsCtrl', function ($scope, ProductsService, socket) {
    var self = $scope;
    self.newProduct = {};

    ProductsService.query(function(products){
      self.products = products;
      socket.syncUpdates('products', self.products);
    });

    self.deleteProduct = function(product){
      ProductsService.delete({id:product._id}, function(product){
        console.log('product deleted');
      })
    }

    self.addProduct = function(){
      ProductsService.save(self.newProduct, function(){
        self.newProduct = {};
      });
    };

    self.$on('$destroy', function() {
      socket.unsyncUpdates('product');
    });
  });
