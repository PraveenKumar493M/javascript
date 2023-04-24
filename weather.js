

var button = document.querySelector('#button');
var inputValue = document.querySelector('#inputValue');
var name1 = document.querySelector('#name');
var deg = document.querySelector('#deg');
var desc = document.querySelector('#desc');
var temp = document.querySelector('#temp');



button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=6bd2b2db1cd127a52c2cbd8a6e788fdc')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var degValue = data['wind']['deg'];
        var tempValue= data['main']['temp'];
        var descValue = data['weather'][0]['description'];
       

        name1.innerHTML = nameValue;
        deg.innerHTML = degValue+ " °C";
        temp.innerHTML = tempValue + " Temp";
        desc.innerHTML = descValue;

        console.log(data);
    })
    

    .catch(err => alert("wrong city name"))
})

function addItem(){
    var a= document.getElementById("list");
    var City = document.getElementById("inputValue").value;
    var li = document.createElement("li");
    li.setAttribute('id', inputValue.value);
    li.appendChild(document.createTextNode(inputValue.value));
    a.appendChild(li);
    var noteList = document.getElementById('list');
            noteList.innerHTML +=  '<li>' + input + '<button id="remove" onclick="removeTask()"">clear</button></li>';


    // var input = document.getElementById('inputValue').value;
    //     if (input == "") {
    //         window.alert("You must enter a value in the New Task field.");
    //     }
    //     else {
    //         var noteList = document.getElementById('list');
    //         noteList.innerHTML +=  '<li>' + input + '<button id="remove" onclick="removeTask()"">clear</button></li>';
    //      }
         
};
function removeTask() {
    event.currentTarget.parentElement.remove();
    
  }

// function removeItem(){
//     var b= document.getElementById("list");
//     var City = document.getElementById("inputValue");
//     var item = document.getElementById("inputValue.value");
//    b.removeChild(item);
//   b.parentNode.removeChild(b);
// }

// function removeItem() {
    
//     }