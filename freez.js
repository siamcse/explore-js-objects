const bottle = {color: 'yellow', price: 30, isCleaned: true, capacity: 1};

//object.keys keys of array return kore
const keys = Object.keys(bottle);
// console.log(keys);

//object.values values of array return kore
const values = Object.values(bottle);
// console.log(values);
//pair returns twoDimensional array
const pair = Object.entries(bottle);
// console.log(pair);
// const twoDimensional = [[ 'color', 'yellow' ],[ 'price', 30 ],[ 'isCleaned', true ],[ 'capacity', 1 ]];

console.log(bottle);

//object seal korle kuno kisu delete kora jay na but modify kora jay
// Object.seal(bottle);

//object freez korle kuno kisu delete ba modify kora jay na
Object.freeze(bottle);

//delete object property er jonno delete use kora hoi
delete bottle.isCleaned;
bottle.color = 'green';
bottle.price = 50;
console.log(bottle);