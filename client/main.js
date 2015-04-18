var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};
var fields = ['name', 'author'];

BooksSearch = new SearchSource('books', fields, options);

Template.searchResult.helpers({
  getBooks: function() {
    return BooksSearch.getData({
      transform: function(matchText, regExp) {
        return matchText.replace(regExp, "<b>$&</b>")
      },
      sort: {createdAt: -1}
    });
  },
  
  isLoading: function() {
    return BooksSearch.getStatus().loading;
  }
});

Template.searchBox.events({
  "keyup #search-box": _.throttle(function(e) {
    var text = $(e.target).val().trim();
    BooksSearch.search(text);
  }, 200)
});