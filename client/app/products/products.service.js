'use strict';

angular.module('tienda')
  .factory('ProductsService', function($resource){
    return $resource('/api/products/:id', {
      id: '@id'
    },{
      update: {
        method:'PUT'
      })
  })
