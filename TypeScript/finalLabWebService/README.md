# Welcome to the TS/LAB - stand alone ATM interface

**To clone the this repo type the following commands**
### Provided you install the nodejs , npm and typescript environment first.

```
git clone -s https://github.com/marioestradarosa/tsbootcamp.git
```

**To update the repo locally after cloning and view more labs 
  type the following command**

```
git pull
```
This lab shows the good practice of programming using the following:
 
- Interfaces 
- Model Classes
- External libraries integration (lodash in this case)

We use lodash to properly manage the array of objects that simulates at this moment our database.  

**Assuming you are inside the finalLabStandAlone directory,
to install the node_modules use the following command.**

```
npm install
```

and to finally run the lab, compile it and execute the utility atmClient from build

```
tsc
node ./build/atmClient.js
```

***tsc*** command will transpile the typescript files .ts into java script files .js and placed them into the ***build*** directory.



