'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongo = require('meteor/mongo');

var collections = {};

var getCollection = function getCollection(name) {
  if (!name) return null;
  if (typeof collections[name] === 'undefined') {
    collections[name] = new _mongo.Mongo.Collection(name);
  }
  // console.log(Object.keys(collections))
  return collections[name];
};

exports.default = getCollection;