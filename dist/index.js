'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var collections = {};

var getCollection = function getCollection(name) {
  if (!name) return null;
  var Mongo = Package.mongo.Mongo;
  if (typeof collections[name] === 'undefined') {
    collections[name] = new Mongo.Collection(name);
  }
  return collections[name];
};

exports.default = getCollection;