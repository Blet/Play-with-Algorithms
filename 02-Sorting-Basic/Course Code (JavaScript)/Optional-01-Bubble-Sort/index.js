let SortTestHelper = require("./SortTestHelper");
let SelectionSort = require("./SelectionSort");
let InsertionSort = require("./InsertionSort.js");
let BubbleSort = require("./BubbleSort");
let BubbleSort2 = require("./BubbleSort2");

function main() {
  // 测试排序算法辅助函数
  let N = 10000;
  let arr1 = SortTestHelper.generateRandomArray(N, 0, 1000);
  SortTestHelper.testSort(SelectionSort, [...arr1]);
  SortTestHelper.testSort(InsertionSort, [...arr1]);
  SortTestHelper.testSort(BubbleSort, [...arr1]);
  SortTestHelper.testSort(BubbleSort2, [...arr1]);
}

main();
