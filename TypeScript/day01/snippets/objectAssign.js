const objectOne = { valueOne : 1 };
const objectTwo = { valueTwo : 2 };

const objectThree = Object.assign( {}, objectOne, objectTwo );

console.log( objectThree ); // { valueOne : 1, valueTwo : 2 }
