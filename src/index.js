let collections = {}

const getCollection = (name) => {
  if(!name) return null
  let Mongo = Package.mongo.Mongo
  if(typeof collections[name] === 'undefined') {
    collections[name] = new Mongo.Collection(name);
  }
  return collections[name];
}

export default getCollection;
