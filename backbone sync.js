Backbone.sync = function(method, model) {
    alert(method + ": " + JSON.stringify(model));
    model.set('id', 22);
  };  
  var book = new Backbone.Model({
    title: "player coordination",
    author: "fernando"
  });

  book.save();
  book.save({author: "alba"});
