export class TaskClass{
    constructor() {

    }

    public boughtPhone() {
    return new Promise( (resolve,reject) => {
            setTimeout( () => {
                resolve('My mom bought an Iphone 7.');
            }, 2000)
    });

    }

     showitOff() {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            resolve('I am show it off!');
        }, 2000)
       });
    }

}