/**
 * Config, variable
 */
var Future = Npm.require('fibers/future');
var Fiber = Npm.require('fibers');

/**
 * Methods
 */
Meteor.methods({

});

/**
 * Function or class
 */

/**
 * insert new user by object (fixtures)
 * 
 * @param           book
 * @return          id
 **/
var insertByObject = function (book) {
    if (booksCollection.findOne({name: book.name}, {fields: {_id:1}})){
        throw new Error(book.name + ' is exists');
    }
    book.updatedAt = new Date();
    book.createdAt = new Date();
    return booksCollection.insert(book);
};

/**
 * 
 *
 * @param {userId} 
 * @api public
 */


/**
 * export
 */
(function(){
    var self = this;
    self.insertByObject     = insertByObject;
}).apply(APP.namespace('app.collections.BOOKS'));

/**
 * Quick test
 */
Meteor.startup(function () {

});