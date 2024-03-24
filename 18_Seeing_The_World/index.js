"use strict";
// Store the locations in a array. Make sure the array is not in alphabetical order.
let travelDestinations = ['Makkah', 'Madinah Munawra', 'Saif ul mulk', 'Naran Kagan', 'Maree'];
//Step 2:
console.log("Orignal Order:");
console.log(travelDestinations);
//AStep 3: Print your array in alphabetical order without modifying the actual list.
console.log("\n Alphabetical order without modifying the actual list");
console.log([...travelDestinations].sort());
