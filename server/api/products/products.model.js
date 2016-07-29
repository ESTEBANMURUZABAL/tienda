'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
  Schema = mongoose.Schema;

var ProductsSchema = new mongoose.Schema({
  name: String,
  info: String,
  category: {
    type: Schema.ObjectId,
    ref: 'Categories'
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  iconUrl: String,
  active: Boolean
});


export default mongoose.model('Products', ProductsSchema);
