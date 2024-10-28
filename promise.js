let p=  new Promise((resolve, reject) => {
    let a= 1+1;
    if(a==2){
        resolve('success')
    }
    else{
        reject('failed')
    }
});
p.then((message)=>{
    alert(message);
    console.log('this is in then func'+message);
    document.write(message);
}).catch((message)=>{
    alert(message);
    console.log('this is in catch func'+ message);
     document.write(message);
});
