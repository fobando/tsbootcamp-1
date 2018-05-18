import * as fs from 'fs';

//it will not block the execution Main Thread, it is asynchronously executed

 fs.readFile('./data/file.txt','utf8', (err,data) => {

       if (err) throw err;

       console.log(data);
       return data;
})

