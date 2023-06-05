// model

var Blog= Backbone.Model.extend({
    defaults:{
        Author:'',
        Title:'',
        Url:''
    }
});

// collection
var Blogs=Backbone.Collection.extend({});

// var blog1=new Blog({
//     author:'joseph',
//     title:'megra',
//     url:'http://roast.com'
// });

// var blog2=new Blog({
//     author:'marcus',
//     title:'motiv',
//     url:'http://restpy.com'
// });
//initiate function
var blogs=new Blog();

//views one blog
var BlogView = Backbone.View.extend({
    model:new Blog(),
    tagName:'tr',
    initialize:function(){
        this.template=_.template($('.blogs-list-template').html());
    },
    events:{
       'click .edit-blog':'edit'
    },
    edit:function(){
       $('.edit-blog').hide();
       $('.delete-blog').hide();
       $('.update-blog').show();
       $('.cancel-blog').show();
    },
    render:function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});


//view all blog
var BlogsView=Backbone.View.extend({
    model:blogs,
    el:$('.blogs-list'),
    initialize:function(){
        this.model.on('add',this.render,this);
    },
    render:function(){
        var self=this;
        this.$el.html('');
        _.each(this.model.toArray(),function(blog){
            self.$el.append((new BlogView({model:blog})).render().$el);
        });
        return this;
    }
});

var blogsview=new BlogsView();
      $(document).ready(function(){
        $('.add-blog1').on('click',function(){
            var blog=new Blog({
                Author:$('.author-input').val(),
                Title:$('.title-input').val(),
                Url:$('.url-input').val()
            }); 
            console.log(blog);
            newbg();
           var newbg=function(){
            console.log(blog);
            blogs.add(blog);
           }    
        }); 
      });
       
 
        
    


