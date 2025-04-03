var MyTeam = Backbone.Model.extend({
    defaults:{
        name:"chandru",
        country:"India",
        game:"Football",
        medal:"Gold"
    }
});

var MyTeam1 = Backbone.Collection.extend({
    model:MyTeam
});

var myVal = new MyTeam1({});
document.write("The collection is that are :",JSON.stringify(myVal));
//2
Backbone.sync=function(method,model){
    document.write("</br>"+" 2: the state is :");
    document.write(method+":"+JSON.stringify(model));
}
var myvar = new Backbone.Collection({
    site:"Backbone",
    title:"solution of tecnology"
});
myvar.fetch();
//3
var Player = Backbone.Model.extend({
    defaults:{
        id:"",
        name:""
    },
});
var PlayerList = Backbone.Collection.extend({
    model:Player
});
var Player1=new Player({id:1,name:"selby"});
var Player2=new Player({id:2,name:"roosey"});

var mylist=new PlayerList();
mylist.add([Player1,Player2]);

document.write("</br>"+'3: this is at '+JSON.stringify(mylist.toJSON()));
var Player3 = new Player({id:3,name:"garage"});
mylist.add(Player3,{at:0});
//mylist.pop(Player2);
//var mylist=Player.slice(0);
//var names=mylist.pluck("name");

document.write("</br>"+'the new list player is :'+JSON.stringify(mylist.toJSON()));
document.write(mylist.pluck('name')); 
