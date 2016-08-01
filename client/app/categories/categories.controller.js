'use strict';

angular.module('tiendaApp')
  .controller('CategoriesCtrl', function ($scope, CategoriesService, socket, $state, $stateParams) {
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
    };

    self.goToCategory = function(category){
      $state.go('view-category', {
        id: category._id
      });
    };

    self.editCategory = function(category) {
      $state.go('edit-category', {
        id: category._id
      });
    };

    // Find existing Category
    self.findOne = function() {
      CategoriesService.get({id:$stateParams.id}, function(category) {
        self.category = category;
      });
    };

    self.updateCategory = function(category) {

    };

    $scope.goBack = function(){
      window.history.back();
    };

    self.$on('$destroy', function() {
      socket.unsyncUpdates('category');
    });

  });
