let SortTestHelper = require("./SortTestHelper");
let SelectionSort = require("./SelectionSort");
let InsertionSort = require("./InsertionSort.js");
let BubbleSort = require("./BubbleSort");
let ShellSort = require("./ShellSort");

function main() {
  // 测试排序算法辅助函数
  let N = 10000;
  let arr1 = SortTestHelper.generateRandomArray(N, 0, 1000);
  SortTestHelper.testSort(SelectionSort, [...arr1]);
  SortTestHelper.testSort(InsertionSort, [...arr1]);
  SortTestHelper.testSort(BubbleSort, [...arr1]);
  SortTestHelper.testSort(ShellSort, [...arr1]);

  console.log();

  let swapTimes = 100;
  console.log(
    "Test for nearly ordered array, size = " + N + " , swap time = " + swapTimes
  );
  let arr2 = SortTestHelper.generateNearlyOrderedArray(N, swapTimes);
  SortTestHelper.testSort(SelectionSort, [...arr2]);
  SortTestHelper.testSort(InsertionSort, [...arr2]);
  SortTestHelper.testSort(BubbleSort, [...arr2]);
  SortTestHelper.testSort(ShellSort, [...arr2], true);
}

main();
