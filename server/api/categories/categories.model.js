'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
  Schema = mongoose.Schema;

var CategoriesSchema = new mongoose.Schema({
  name: String,
  info: String,
  products: [{
    type: Schema.ObjectId,
    ref: 'Products'
  }],
  active: Boolean
});

export default mongoose.model('Categories', CategoriesSchema);
