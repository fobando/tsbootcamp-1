// A function with a side effect
var x = 10;

const myFunc = function ( y ) {
  x = x + y;
};

myFunc( 3 );
console.log( x ); // 13

myFunc( 3 );
console.log( x ); // 16
