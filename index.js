const hlp = require('./helpers');
const mergeSort = require('./merge-sort');
const quickSort = require('./quick-sort');
const insertSort = require('./insertion-sort');

const MULT = 10;
const arr = hlp.createRandomArray(1000, MULT);
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

hlp.logTimeExec(() => mergeSort(arr), 'custom merge sort -');
try {
  hlp.logTimeExec(() => quickSort(qArr), 'custom quick sort');
} catch (e) {
  console.error('Quick sort\'ve broken')
}

hlp.logTimeExec(() => insertSort(iArr), 'custom insertion sort');
hlp.logTimeExec(() => bArr.sort((a,b) => a-b), 'build-in sort');

hlp.isArraysEqual(arr, bArr);
hlp.isArraysEqual(arr, qArr);
hlp.isArraysEqual(arr, iArr);
// console.log('sorted array', {arr, clonnedArr});