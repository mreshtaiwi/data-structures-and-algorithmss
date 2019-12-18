'use strict';
// const sortBackwards = (arr) => {
//     // Solution code here...
//     arr.sort( (a,b) => {
//       return a < b;
//     });
//     console.log(a);
//   };
// let a = [1,2,3,4,5,6,7];
// a.reverse();
// console.log(a);



//CHALLENGE 3
let mainarray;
let lengtharray = [];
let arrayindex = [];

const sortByLength = (arr) => {
  mainarray = arr;
  // Solution code here...
  for (let i = 0; i < mainarray.length; i++) {
    lengtharray.push(mainarray[i].length);
    arrayindex.push(i);
  }
  // lengtharray.sort((a, b) => {
  //     // aaa = a;
  //     // bbb = b;
  //     return a < b;
  // });
  mainarray.sort((a, b) => {
    return 'fale';
  });
  console.log(mainarray);
  //console.log(lengtharray);
};
let ans = sortByLength(['alphabet', 'Zebra', 'Alphabet', 'carrot']);