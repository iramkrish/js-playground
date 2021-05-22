// tutorial referred : https://alligator.io/js/slice-vs-splice/
// recommandation : use quokka.js extenison to view results inside vscode

// slice is immutable and splice mutates the array.

// slice doesn't mutates the array
const myArr = ['🍕', '🍾', '🎊', '✨'];
const myArrCopy = myArr.slice();
console.log(myArrCopy,myArr);



//  slice can take 2 arguments - both are optional and number
//  first optional argument is the beginning index and the second optional argument is the ending index (non-inclusive)
//  slice method of the array tries to coerce the arugments to numbers
//     "2" -> 2
//     "a" -> NaN
//         if NaN argument is ingnored and default behaviour is set

const myArrV2 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV2 = myArrV2.slice(2);
console.log(myArrCopyV2);


const myArrV3 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV3 = myArrV3.slice('2');
console.log(myArrCopyV3);


const myArrV4 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV4 = myArrV4.slice('a');
console.log(myArrCopyV4);


//  slice can take -negative numbers also

const myArrV5 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV5 = myArrV5.slice(-3,2);
console.log(myArrCopyV5);


const myArrV6 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV6 = myArrV6.slice(-3,-2);
console.log(myArrCopyV6);


// negative and postive equalants
const myArrV7 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV7 = myArrV7.slice(1,2);
console.log(myArrCopyV7);

const myArrV8 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV8 = myArrV8.slice(-3,-2);
console.log(myArrCopyV8);


//  ************************************* splice *************************************

//splice mutates the array.
const myArrV9 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV9 = myArrV9.splice(2);
console.log(myArrCopyV9,myArrV9);


// The splice method changes the content of the array in place and can be used to add or remove items from the array.
// let's take a look at removing items from the array

// splice method takes 2 optional arguments
// first optional argument is the beginning index and the second optional argument is the number of elements to remove

// first optional argument (can be positive or negative integer)
const myArrV10 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV10 = myArrV10.splice(0);
console.log(myArrCopyV10);


const myArrV11 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV11 = myArrV11.splice(1);
console.log(myArrCopyV11);


const myArrV12 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV12 = myArrV12.splice(-1);
console.log(myArrCopyV12);


// second optional argument
// if positive integer : method returns the array with removed elements
// if 0 or negative number : method returns the array with removed elements which is empty

const myArrV13 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV13 = myArrV13.splice(1,1);
console.log(myArrCopyV13);


const myArrV14 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV14 = myArrV14.splice(1,0);
console.log(myArrCopyV14);

const myArrV15 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV15 = myArrV15.splice(1,-1);
console.log(myArrCopyV15);


// adding items to array
// second optional argument when recieves 0 , method adds new items at the specified location ( first argument ) in the array:
const myArrV16 = ['🍕', '🍾', '🎊', '✨'];
const myArrCopyV16 = myArrV16.splice(2,0,'🌭');
console.log(myArrCopyV16 , myArrV16);

