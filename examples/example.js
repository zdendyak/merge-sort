const { helpers, mergeSort, quickSort, insertSort } = require('../index');

const MULT = 10;
const arr = helpers.createRandomArray(1000, MULT);
const prob = [];
for (let i = 0, len = arr.length; i<len; i++) {
  prob[arr[i]] = prob[arr[i]] ? prob[arr[i]] + 1 : 1;
}
for (let i = 0; i<MULT; i++) {
  console.log(`${i} : ${prob[i] || 0}` );
}
const bArr = arr.slice(0);
const qArr = arr.slice(0);
const iArr = arr.slice(0);
// console.log('initial arrays', {arr, clonnedArr});

helpers.logTimeExec(() => mergeSort(arr), 'custom merge sort -');
try {
  helpers.logTimeExec(() => quickSort(qArr), 'custom quick sort');
} catch (e) {
  console.error('Quick sort\'ve broken')
}

helpers.logTimeExec(() => insertSort(iArr), 'custom insertion sort');
helpers.logTimeExec(() => bArr.sort((a,b) => a-b), 'build-in sort');

helpers.isArraysEqual(arr, bArr);
helpers.isArraysEqual(arr, qArr);
helpers.isArraysEqual(arr, iArr);
// console.log('sorted array', {arr, clonnedArr});