import * as got from "got";

console.log ("starting ...");

got.get("http://localhost:3000/api/32323-2323").then( 
       (data) => { 

              let result  = JSON.parse(data.body);

              console.log("Data from web backend " + result.account );
              console.log("finished!");
       },
       (err)  => { 
              console.log("Error from web backend " + err.message);
        }
	);

console.log("Finished !");
