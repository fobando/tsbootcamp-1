const promise = new Promise( (resolve,reject) => {
        setTimeout( () => {
            resolve('My mom bought an Iphone 7.');
        }, 2000)
});

const secondPromise = new Promise( (resolve,reject) => {
    setTimeout( () => {
        resolve('I am show it off!');
    }, 2000)
});

 
 
console.log('This 1 step ');

promise.then( 
      (result)=> { 
            console.log(result);

               secondPromise.then( resp => {
                   console.log(resp);
            })
         } 
);

console.log('This 3 step ');

