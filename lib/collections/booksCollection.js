booksCollection = new Mongo.Collection('books');

// if(Meteor.isServer) {
//   booksCollection._ensureIndex({name: 1, author: 1});
// }