'use strict';

angular.module('tiendaApp')
  .controller('CategoriesCtrl', function ($scope, CategoriesService, socket) {
    var self = $scope;
    self.newCategory = {};

    CategoriesService.query(function(categories){
      self.categories = categories;
      socket.syncUpdates('categories', self.categories);
    });

    self.addCategory = function(){
      if(!self.newCategory){ return;}
      CategoriesService.save(self.newCategory, function(){
        self.newCategory = {};
      });
    };

    self.deleteCategory = function(category) {
      CategoriesService.delete({id:category._id}, function(){
        console.log('category deleted')
      })
    }

    self.$on('$destroy', function() {
      socket.unsyncUpdates('category');
    });

  });
