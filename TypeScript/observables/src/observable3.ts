import {  from } from 'rxjs';

var array = [1,2,3,4,5];

// Converts an array to an observable sequence
var source = from(array);

// Prints out each item
var subscription = source.subscribe(
  x => console.log('onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('onCompleted'));