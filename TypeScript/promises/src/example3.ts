const promise6 = new Promise( (resolve,reject) => {
    setTimeout( () => {
        resolve('I am showing it off!');
    }, 2000)
    });
    
    const promise7 = new Promise( (resolve,reject) => {
        setTimeout( () => {
            resolve('My mom bought an Iphone 7.');
        }, 2000)
    });
     
    Promise.all([promise7,promise6]).then (value => {
           console.log(value);
    });