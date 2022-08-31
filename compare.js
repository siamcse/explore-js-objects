// const first = {a:2};
// const second = {a:2};
// if(first === second){
//     console.log("they are same");
// }
// else{
//     console.log('different');
// }

//do not use this for compare object or array
//object same but place change dont determine this method, so do not use this method
const first = {a:2, b:4, c:6};
const second = {a:2, c:6, b:4};
// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);
// if(firstString === secondString){
//     console.log('Same');
// }
// else{
//     console.log('different');
// }

function compareObject(first,second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    //first dekhte hobe object er key gula soman ache kina
    if(firstKeys.length === secondKeys.length){
        //soman hole for of er maddhome key diye value gula check korte hobe
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}
const isSame = compareObject(first,second);
console.log(isSame);