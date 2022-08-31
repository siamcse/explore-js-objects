const numbers = [12,34,53,23,65,67,56];
//for of loop
// for(const number of numbers){
//     console.log(number);
// }

//1.for of loop cannot be used in objects
const bottle = {color: 'yellow', price: 30, isCleaned: true, capacity: 1};
//first option to loop through an object
const keys = Object.keys(bottle);
// console.log(keys);
/*
3 ways to read object properties
1.bottle.color
2.bottle['color']
3.bottle[key]
*/
//directly object er upor for of use kora jay na but keys er upor use kora jay
for(const key of keys){
    // console.log(key, bottle[key]);
}
//for in loop direct object er upor use kora jay
for(const key in bottle){
    const value = bottle[key];
    // console.log(key,value);
}

//advanced
const pair = Object.entries(bottle);
// console.log(pair);
//object pair er upor for of use kora jay
for(const [key,value] of Object.entries(bottle)){
    console.log(key,value);
}