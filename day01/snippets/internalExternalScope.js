 // a variable with a local scope
     function  addNumbers( num1 , num2 ) {                                          
      var localResult =  num1 + num2;
      console.log('The internal context result is ' + localResult);                                    
    }                                                   
                                                  
   addNumbers(10,5); 
   console.log('The external context result is ' + localResult); 

