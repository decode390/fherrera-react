
// const array = new Array(100);

// array.push(1);
// array.push(2);
// array.push(3);
//
const array = [1,2,3,4];

let array2 = [...array, 5];
// let array2 = array;
// array2.push(5);
let array3 = array2.map(e => e * 2);

console.log(array);
console.log(array2);
console.log(array3);
