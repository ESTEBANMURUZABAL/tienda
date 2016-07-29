'use strict';

angular.module('tiendaApp')
  .controller('ProductsCtrl', function ($scope, ProductsService) {
    self = this;
    self.newProduct = {};
    self.products = {};

    self.addProduct = function(self.newProduct){
      if(!self.newProduct){ return;}
      ProductsService.save(self.newProduct, function(){
        self.newCategory = {};
      });
    };

    self.findCategories = function(){
      ProductsService.find({}, function(products){
        self.products = products;
      });
    };

  });
