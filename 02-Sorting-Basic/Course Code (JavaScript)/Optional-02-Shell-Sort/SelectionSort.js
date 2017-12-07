module.exports = function SelectionSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        //   // 寻找[i, n)区间里的最小值的索引
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
};

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}
