const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // dB calls, crytography, network
    setTimeout(function(){
        console.log('Async task is complete');
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

