// This simple example demonstrates how to use Promise in node js

let serveBeer = new Promise(function(resolve, reject){
    let serving = true;
    
    if(serving){
        resolve('serving Beer tonight');
    }else{
        reject('not serving Beer tonight');
    }
});


serveBeer.then(function(fromResolve){
    console.log('My frind is ' + fromResolve);
    }).catch(function(fromReject){
    console.log('My friend is ' + fromReject);
})
