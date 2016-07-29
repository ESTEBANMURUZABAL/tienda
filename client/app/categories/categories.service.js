'use strict';

angular.module('tienda')
  .factory('CategoriesService', function($resource){
    return $resource('/api/categories/:id', {
      id: '@id'
    },{
      update: {
        method:'PUT'
      })
  })
