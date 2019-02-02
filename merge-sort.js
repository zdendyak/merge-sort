const mergeSort = function(arr, compareFunc, left, right) {
  if (!Array.isArray(arr)) throw new Error('Array required as first argument');
  if (!compareFunc || typeof compareFunc !== 'function') compareFunc = (a, b) => a - b;
  if (left === null || left === undefined) left = 0;
  if (right === null || right === undefined) right = arr.length - 1;
  
  if (left >= right) return;
  const middle = Math.floor((left + right) / 2);
  mergeSort(arr, compareFunc, left, middle);
  mergeSort(arr, compareFunc, middle + 1, right);
  // merge left anf right parts
  let leftIndex = 0;
  let rightIndex = middle + 1 - left;
  let helpedArr = arr.slice(left, right + 1);
  let index = left;
  while(leftIndex <= middle - left && rightIndex <= right - left) {
    if (compareFunc(helpedArr[leftIndex], helpedArr[rightIndex]) <= 0) {
      arr[index] = helpedArr[leftIndex];
      leftIndex++;
      index++;
    } else {
      arr[index] = helpedArr[rightIndex];
      rightIndex++;
      index++;
    }
  }
  while (leftIndex <= middle - left) arr[index++] = helpedArr[leftIndex++];
  while (rightIndex <= right - left) arr[index++] = helpedArr[rightIndex++];
}

module.exports = mergeSort;