const logTimeExec = function (f, msg) {
  if (typeof f !== 'function') throw new Error('logTimeExec: function must be specified');
  const start = Date.now();
  f();
  console.log((msg ? `${msg} ` : '') + `Time execution: ${Date.now() - start}`);
}

createRandomArray = function(n, mult) {
  if (typeof n === 'string') n = parseInt(n);
  if (!n) throw new Error('createRandomArray: positive integer value must be specified as first argument');
  if (mult && (!Number.isInteger(mult) && !parseInt(mult) || !mult)) throw new Error('createRandomArray: non-zero integer value must be specified as second argument');
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.random();
    if (mult) arr[i] = Math.floor(mult * arr[i]);
  }
  return arr;
}

const isArraysEqual = (arr1, arr2, msg) => {
  if (arr1.length !== arr2.length) {
    console.log('Arrays are not equal');
    return false; 
  }
  let isEqual = true;
  for (let i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Not equal at index ${i}: ${arr1[i]} !== ${arr2[i]}`);
      isEqual = false;
    }
  }
  if (isEqual) console.log(msg || 'Arrays are equal'); 
  return isEqual;
}

module.exports = {
  logTimeExec,
  createRandomArray,
  isArraysEqual
}