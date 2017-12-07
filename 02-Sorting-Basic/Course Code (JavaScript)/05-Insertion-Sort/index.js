let SortTestHelper = require("./SortTestHelper");
let SelectionSort = require("./SelectionSort");
let InsertionSort = require("./InsertionSort.js");

function main() {
  // 测试排序算法辅助函数
  let N = 20000;
  let arr1 = SortTestHelper.generateRandomArray(N, 0, 10000);
  let arr2 = [...arr1];
  SortTestHelper.testSort(SelectionSort, arr1);
  SortTestHelper.testSort(InsertionSort, arr2);
}

main();
