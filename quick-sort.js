const quickSort = function(arr, compareFunc, low, high) {
  if (!Array.isArray(arr)) throw new Error('Array required as first argument');
  if (!compareFunc || typeof compareFunc !== 'function') compareFunc = (a, b) => a - b;
  if (low === null || low === undefined) low = 0;
  if (high === null || high === undefined) high = arr.length - 1;

  const swap = function (arr, i, j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }

  const partition = function (arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
      if (arr[j] <= pivot) {
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i+1, high);
    return i + 1;
  }

  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, compareFunc, low, pi - 1);
    quickSort(arr, compareFunc, pi + 1, high);
  }
}

module.exports = quickSort;