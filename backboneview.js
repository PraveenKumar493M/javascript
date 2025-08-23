//1
var ModeView1 = Backbone.Model.extend({
    defaults:{
      name:"david"
    }
});
var DemoView1 = Backbone.View.extend({  
  initialize:function(){
      document.write("text can initialized.."+'</br>');
      document.write("my name is : ",this.model.get("site")+'</br>');
      document.write("my tag name is ",this.tagName+'</br>');
      document.write("my class name is ",this.className+'</br>');
  },
});
$(function(){
  var modeview1 = new ModeView1({site:"Tutorial point"})
  var demoview1= new DemoView1({
      model:modeview1,tagName:"header",className:"basics"
  })
});
//2
var myLog = $('#mydata');  
var data = function(val) {  
   document.write(val);  
};  
var ViewDemo = Backbone.View.extend({  
   events: {  
      'click [data-test]' : 'myFunc1',  
      'click *[data-test]': 'myFunc2',  
   },  
   el: $('#myVal'),  
   myFunc1: function () {  
      data('Welcome to JavaTpoint');  
   },  
   myFunc2: function () {  
      data(': A solution of all technology...');  
   }  
});  
var myview = new ViewDemo(); 





