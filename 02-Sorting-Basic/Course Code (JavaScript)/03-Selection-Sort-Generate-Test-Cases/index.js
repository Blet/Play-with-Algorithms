function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function SelectionSort(arr) {
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
}

function main() {
  // 测试排序算法辅助函数
  let N = 20;
  let SortTestHelper = require("./SortTestHelper");
  let arr = SortTestHelper.generateRandomArray(N, 0, 10000);

  arr = SelectionSort(arr);
  SortTestHelper.printArray(arr);
}

main();
