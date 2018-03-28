import validate from "./StaticValidator";

let strings = [ 
    "Feliece",
    "98502",
    "101"
];

strings.forEach(pluto => {
       console.log(`"${pluto}"  ${validate(pluto)} ?  "matches" : "does not match"} `);
});