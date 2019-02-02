const hlp = require('./helpers');
const mergeSort = require('./merge-sort');

const arr = hlp.createRandomArray(40000000, 100);
const clonnedArr = arr.slice(0);
// console.log('initial arrays', {arr, clonnedArr});
hlp.isArraysEqual(arr, clonnedArr, 'initialy is equal');

hlp.logTimeExec(() => mergeSort(arr), 'custom merge sort -');
hlp.logTimeExec(() => clonnedArr.sort((a,b) => a-b), 'build-in sort');

hlp.isArraysEqual(arr, clonnedArr);
// console.log('sorted array', {arr, clonnedArr});