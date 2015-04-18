SearchSource.defineSource('books', function(searchText, options) {
    var options = {sort: {createdAt: -1}, limit: 5};
  
    if(searchText) {
        var regExp = buildRegExp(searchText);
        var selector = {$or: [
            {name: regExp},
            {author: regExp}
        ]};
    
        return booksCollection.find(selector, options).fetch();
    } else {
        return booksCollection.find({}, options).fetch();
    }
});

function buildRegExp(searchText) {
    // this is a dumb implementation
    var parts = searchText.trim().split(/[ \-\:]+/);
    return new RegExp("(" + parts.join('|') + ")", "ig");
}