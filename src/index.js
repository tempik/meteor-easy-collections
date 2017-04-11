import { Mongo } from 'meteor/mongo';

let collections = {}

const getCollection = (name) => {
  if(!name) return null
  if(typeof collections[name] === 'undefined') {
    collections[name] = new Mongo.Collection(name);
  }
  // console.log(Object.keys(collections))
  return collections[name];
}

export default getCollection;
