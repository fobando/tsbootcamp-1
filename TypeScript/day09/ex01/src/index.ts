import { Greeter } from "./lib/Greeter";
import * as moment from 'moment';
import * as _ from 'lodash';

console.log(Greeter('Jonathan'));

console.log(moment().format('YYYY-MM-DD HH:mm:ss'));


let teamA = ["Felliece","David","Francisco","Rona","Sayda"];
let teamB = ["Jose","Hassaram","Yssiry","Gustavo"];

let teamX = _.union(teamA,teamB);

console.log(teamX);
