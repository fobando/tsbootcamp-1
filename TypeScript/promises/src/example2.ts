const promise4 = new Promise( (resolve,reject) => {
setTimeout( () => {
    resolve('I am showing it off!');
}, 2000)
});

const promise3 = new Promise( (resolve,reject) => {
    setTimeout( () => {
        resolve('My mom bought an Iphone 7.');
    }, 2000)
});
 
Promise.race([promise4,promise3]).then ( value => {
       console.log(value);
});