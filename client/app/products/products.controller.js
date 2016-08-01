'use strict';

angular.module('tiendaApp')
  .controller('ProductsCtrl', function ($scope, ProductsService, socket, $state, $stateParams) {
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
    };

    self.addProduct = function(){
      ProductsService.save(self.newProduct, function(){
        self.newProduct = {};
      });
    };

    self.goToProduct = function(product) {
      $state.go('view-product', {
        id: product._id
      });
    };

    self.editProduct = function(product) {
      $state.go('edit-product', {
        id: product._id
      });
    };

    self.updateProduct = function(product) {

    };

    $scope.goBack = function(){
      window.history.back();
    };

    // Find existing product
    self.findOne = function() {
      ProductsService.get({id: $stateParams.id}, function (product) {
        self.product = product;
      });
    }

    self.$on('$destroy', function() {
      socket.unsyncUpdates('product');
    });
  });
