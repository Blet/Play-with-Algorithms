module.exports = function BubbleSort(arr) {
  let n = arr.length;
  let swapped = false;

  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i);
        swapped = true;
      }
    }
    // 优化, 每一趟Bubble Sort都将最大的元素放在了最后的位置
    // 所以下一次排序, 最后的元素可以不再考虑

    n--;
  } while (swapped);
};

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}
