import { timer } from 'rxjs';

console.log('Current time: ' + Date.now());

var source = timer(
  5000, /* 5 seconds */
  1000 /* 1 second */)
   ;

var x = source.subscribe(
        x => console.log('Next ',x ) 
      );

 setTimeout( () => {
       x.unsubscribe();
 },10000
 );

