'use strict';

angular.module('tiendaApp')
  .factory('ProductsService', function($resource){
    return $resource('/api/products/:id', {
      id: '@id'
    },{
      update: {
        method:'PUT'
      }
    });
  });
