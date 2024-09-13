<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src = "https://code.jquery.com/jquery-2.1.3.min.js"type = "text/javascript"></script>
    <script src = "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js"type = "text/javascript"></script>        
    <script src = "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min.js"type = "text/javascript"></script> 
    <title>Backbonejs</title>
</head> 

<body>
    <div id="link">
    <a href="#/student1">student1</a>
    <a href="#/student2">student2</a>
    <a href="#/student3">student3</a>
    <button id="btn">click</button>
    </div>
    <div id="content"></div>
    <script type="text/template" id='tem'>
         <%_.each(collection,function(model){%>
             <ul style='border:1px solid;background-color:pink;color:green'>Name:<%=model.Name %> <br>
                Dept:<%=model.Dept%> <br>
                Year:<%=model.Year%>
        <% })%></ul>
    </script>
    <script type="text/javascript">
        $(document).ready(function(){
            $('a').hide();
            $("#btn").click(function(){
                $('a').show();
                var student=Backbone.Model.extend({
            defaults:{
                Name:"kumar",
                Dept:"Mech",
                Year:"2nd"
            }
        });
        var student1=new student({
            Name:"Raja",
            Dept:"ECE",
            Year:"3rd"
        });
        var student2=new student({
            Name:"KTM",
            Dept:"EEE",
            Year:"4th"
        });
        var student3=new student({
            Name:"Paul",
            Dept:"Mech",
            Year:"1st"
        })

        var collection=Backbone.Collection.extend({
            stud:student
        });
        var collection1=new collection(student1);

        var view1=Backbone.View.extend({
            el:"#content",
            template:_.template($('#tem').html()),
            s:collection1,
            initialize:function(){
                this.render();
            },
            render:function(){
                this.$el.html(this.template({
                    collection:this.s.toJSON()
                }))
            }
        });
        //2
        var collection2=new collection(student2);

        var view2=Backbone.View.extend({
            el:"#content",
            template:_.template($('#tem').html()),
            col2:collection2,
            initialize:function(){
                this.render();
            },
            render:function(){
                this.$el.html(this.template({
                    collection:this.col2.toJSON()
                }))
            }
        });
        var collection3=new collection(student3);
        var view3= Backbone.View.extend({
            el:"#content",
            template:_.template($('#tem').html()),
            col3:collection3,
            initialize:function(){
                this.render();
            },
            render:function(){
                this.$el.html(this.template({
                    collection:this.col3.toJSON()
                }))
            }
        });


        var Router=Backbone.Router.extend({
            routes:{
                 "student1":"showview1",
                 "student2":"showview2",
                 "student3":"showview3"
            },
            showview1:function(){
                var viewobj=new view1();
            },
            showview2:function(){
                var viewobj= new view2();
            },
            showview3:function(){
                var viewobj=new view3();
            }
        });
        var router =new Router();
        Backbone.history.start();

            });
        });

        //5
        var myVal=_.extend({name:"this events tutorial in Backbone"},Backbone.Events);
        myVal.on('myFunc',function(){
            document.write('<h5>'+'the heading is : '+'</h5>')
            document.write(this.name);
        });
        myVal.trigger('myFunc');
       
        //6
        var myVal1=_.extend({name:'Hello guys'},Backbone.Events);
        var myFun = function(){
            document.write("First Backbone tutorial"+"<br>");
        };
        var myFun1=function(){
            document.write(" second this is: "+"<br>")
        }

        myVal1.on('log',myFun);
        myVal1.on('log',myFun1);

        document.write("before using off events"+"<br>");

        myVal1.trigger('log');

         myVal1.off('log',myFun);  
        document.write("<br>");  
        document.write("<br>"+'After using off event, values will be: ');  
        myVal1.trigger('log');  

        
    </script>

</body>
</html>
