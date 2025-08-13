$(document).ready(function(){
    var table=Backbone.View.extend({
        el:'#content',
        template:_.template($('#temp').html()),
        initialize:function(){
            this.render();
        },
        events:{
            'click #get':'get',
            'click #add':'add',
            'click #update':'update'
        },
        get:function(){
            $.get('http://localhost:3000/all',(data,status)=>{
                console.log(data);
                const tab=data;
                data.map((values)=>{
                     $('#tbody').append(
                        `<tr>
                        <td>${values.id}</td>
                        <td>${values.Student_Name}</td>
                        <td>${values.City}</td>
                        <td>${values.Country}</td>
                        <td><button class=delete ${values.id}>delete</button></td>
                        </tr>`)
                })
            })
        },
    })
});

