const insertSort = function(arr, compareFunc, start, end) {
  if (!Array.isArray(arr)) throw new Error('Array required as first argument');
  if (!compareFunc || typeof compareFunc !== 'function') compareFunc = (a, b) => a - b;
  if (start === null || start === undefined) start = 0;
  if (end === null || end === undefined) end = arr.length - 1;

  for (let i = start + 1; i <= end; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= start && arr[j] > key) {
      arr[j+1] = arr[j];
      --j;
    }
    arr[j+1] = key;
  }
}

module.exports = insertSort;