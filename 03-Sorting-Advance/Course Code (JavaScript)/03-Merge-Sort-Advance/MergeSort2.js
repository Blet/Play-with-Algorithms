const InsertionSort = require("./InsertionSort");

module.exports = function MergeSort(arr) {
  _sort(arr);
  function _sort(arr) {
    let n = arr.length;
    _sortMerge(arr, 0, n - 1);
  }

  // 递归使用归并排序,对arr[l...r]的范围进行排序
  function _sortMerge(arr, l, r) {
    // 优化2: 对于小规模数组, 使用插入排序
    if (r - l <= 15) {
      InsertionSort(arr, l, r);
      return;
    }

    let mid = parseInt((l + r) / 2);

    _sortMerge(arr, l, mid);
    _sortMerge(arr, mid + 1, r);

    // 优化1: 对于arr[mid] <= arr[mid+1]的情况,不进行merge
    // 对于近乎有序的数组非常有效,但是对于一般情况,有一定的性能损失
    if (arr[mid] > arr[mid + 1]) {
      _merge(arr, l, mid, r);
    }
  }

  function _merge(arr, l, mid, r) {
    //  T aux[r-l+1];
    //T *aux = new T[r-l+1];

    let aux = [];
    aux[r - l + 1] = arr[r - l + 1];

    for (let i = l; i <= r; i++) {
      aux[i - l] = arr[i];
    }
    let i = l,
      j = mid + 1;

    for (k = l; k <= r; k++) {
      if (i > mid) {
        // 如果左半部分元素已经全部处理完毕
        arr[k] = aux[j - l];
        j++;
      } else if (j > r) {
        // 如果右半部分元素已经全部处理完毕
        arr[k] = aux[i - l];
        i++;
      } else if (aux[i - l] < aux[j - l]) {
        // 左半部分所指元素 < 右半部分所指元素
        arr[k] = aux[i - l];
        i++;
      } else {
        // 左半部分所指元素 >= 右半部分所指元素
        arr[k] = aux[j - l];
        j++;
      }
    }
  }
};
