module.exports = function InsertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let e = arr[i];
    let j = i;
    for (; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
};

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}
