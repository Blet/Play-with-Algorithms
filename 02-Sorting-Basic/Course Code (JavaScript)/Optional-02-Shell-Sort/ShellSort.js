module.exports = function ShellSort(arr) {
  // let n = arr.lenght;

  // let h = 1;

  // // 寻找增量点

  // while (h < n / 3) {
  //   h = 3 * h + 1;
  // }

  h = 4;
  while (h >= 1) {
    for (let i = h; i < n; i++) {
      let e = arr[i];
      let j = i;
      for (; j >= h && e < arr[j - h]; j -= h) {
        arr[j] = arr[j - h];
      }
      arr[j] = e;
    }
    h /= 3;
  }
};
