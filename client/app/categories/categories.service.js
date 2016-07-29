'use strict';

angular.module('tiendaApp')
  .factory('CategoriesService', function($resource){
    return $resource('/api/categories/:id', {
      id: '@id'
    },{
      update: {
        method:'PUT'
      }
    });
  });


