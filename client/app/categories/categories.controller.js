'use strict';

angular.module('tiendaApp')
  .controller('CategoriesCtrl', function ($scope, CategoriesService) {
    self = $scope;
    $scope.newCategory = {};
    $scope.categories = {};

    $scope.addCategory = function($scope.newCategory){
      if(!$scope.newCategory){ return;}
      CategoriesService.save($scope.newCategory, function(){
        $scope.newCategory = {};
      });
    };

    $scope.findCategories = function(){
      CategoriesService.find({}, function(categories){
        $scope.categories = categories;
      });
    };

  });
