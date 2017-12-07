let SortTestHelper = require("./SortTestHelper");
let InsertionSort = require("./InsertionSort");
let MergeSort = require("./MergeSort");
let MergeSort2 = require("./MergeSort2");

function main() {
  // 测试排序算法辅助函数
  let N = 50000;

  let arr1 = SortTestHelper.generateRandomArray(N, 0, 100000);
  SortTestHelper.testSort(InsertionSort, [...arr1]);
  SortTestHelper.testSort(MergeSort, [...arr1]);
  SortTestHelper.testSort(MergeSort2, [...arr1]);

  console.log();
  let swapTimes = 10;
  let arr2 = SortTestHelper.generateNearlyOrderedArray(N, swapTimes);
  SortTestHelper.testSort(InsertionSort, [...arr2]);
  SortTestHelper.testSort(MergeSort, [...arr2]);
  SortTestHelper.testSort(MergeSort2, [...arr2]);
}

main();
