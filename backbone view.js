const mod = Backbone.View.extend({
    el:"#content",
    template:_.template($('#temp').html()),
    initialize:function(){
     this.render();
     },
});
