'use strict';
// CHALLENGE 1
// const greeting = (word) => {
//     console.log(word.toUpperCase());
//     //return word.toUpperCase();
// };

// greeting('hello 301 students!');



// CHALLENGE 2
// const addValues = (arr, value) => {
//   // Solution code here...
//   let newarray = [];
//   let newvalue = value;
//   newarray.push(newvalue);
//   //console.log(newarray);
//   //return newarray;
//   //console.log(newarray);
// };
// const addNumbers = (num, arr, times, callback) => {
//   console.log('hi');
//   // Solution code here...
//   let newvalue = num;//8
//   let newarray = arr;//[]
//   let counts = times;//5
//   for (let i = 0; i < counts; i++) {
//     newarray.push(newvalue);
//   }
//   console.log(newarray);
//   //console.log(counts);
//   //console.log(newarray);
// };

// addNumbers(8, [], 5, addValues());

// CHALLENGE 3
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const removeOne = (num, arr) => {
  // Solution code here...
  let value = num;
  // for (let i = 0; i < arr.length; i++) {
  if (value % 3 === 2) {
    arr.pop();
  }
  // }
  //console.log(arr);
  return arr;
};
//removeOne(8, arr);
const removeElements = (arr, callback) => {
  // Solution code here...
  let newarray = arr;
  for (let i = 0; i < arr.length; i++) {
    if (newarray[i] % 3 === 2) {
      newarray.pop();
    }
  }
  console.log(newarray);
  return newarray;
};
//removeElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], removeOne());

//CHALLENGE 6

const createList = (availableItems) => {
  // Solution code here... 
  let inventory = [
    { name: 'apples', available: true, },
    { name: 'pears', available: true, },
    { name: 'oranges', available: false, },
    { name: 'bananas', available: true, },
    { name: 'blueberries', available: false, }
  ];
  let available = [];
  inventory.forEach(function(value,idx){
    console.log(inventory[idx].available);
    if(inventory[idx].available){
      available.push(inventory[idx].name);
    }
  });
  console.log(available);
};
//createList();
//createList(inventory);

//CHALLENGE 7
const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const output = [];
const fizzbuzz = (arr) => {
  // Solution code here...
  let newarray = arr;
  newarray.forEach(function (value,idx) {
    if (value % 3 === 0 && value % 5 === 0) {
      output.push('Fizz Buzz');
    }else if(value % 3 === 0){
      output.push('Fizz');
    }else if (value % 5 === 0) {
      output.push('Buzz');
    }else{
      output.push(value);
    }
  });
  console.log(output);
};

fizzbuzz(inputs);
