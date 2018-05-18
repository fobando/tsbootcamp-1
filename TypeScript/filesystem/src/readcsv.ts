/*
*
* Author: marioestrada@eycgrupo.com
* This is a solution for in-class excercise
*/

import * as fs from 'fs';
import * as csvparse from 'csv-parse';
import {numberWithCommas } from './lib/mylib';

 
//it will not block the execution Main Thread, it is asynchronously executed

var parser = csvparse;

fs.readFile('./data/order.csv','utf8', (err,data) => {

    if (err) throw err;

   parser(data, {delimiter : ','}, (error:any,output:any) => {
    let isHeader = true;

    output.forEach( (element :any)  => {

    if (!isHeader) {

            let orderNumber = element[0];
            let orderTotal  = element[2];
            let orderSalesTax = (parseFloat(orderTotal) * 0.125).toFixed(2);

            console.log('Total Order for ' + orderNumber + ' is BZD ' + numberWithCommas(orderTotal) + ', Salex Tax BZD ' +  numberWithCommas(orderSalesTax));
	    }
	    else { isHeader = false; }
     });
           
   });

 
 })
