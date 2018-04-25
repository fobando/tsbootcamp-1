import { Observable, from, of, range } from 'rxjs';

 
function pluto(a:string) :  Observable<number> {
   return range(1,10);
}


function mickey() :  Observable<number> {
    return of(1,2,3,4,5); 
 }

 pluto("hello world").subscribe( arg => {
      console.log("next pluto ",arg);
 });

mickey().subscribe(
     (result) => {  console.log('On Next Value => ',result);
    
})

console.log("finished");
