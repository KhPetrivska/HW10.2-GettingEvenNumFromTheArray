'use strict'
//debugger
const array = [1, 2, 3, 4, 12, 0,3, -2, 8];
const evenNumArray = array.filter(element => {
   return Number.isInteger(element / 2);
});

console.log(evenNumArray);