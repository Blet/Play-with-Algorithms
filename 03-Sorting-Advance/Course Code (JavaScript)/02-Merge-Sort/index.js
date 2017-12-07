let SortTestHelper = require("./SortTestHelper");
let MergeSort = require("./MergeSort");

function main() {
  // 测试排序算法辅助函数
  let N = 1000000;
  // Merge Sort是我们学习的第一个O(nlogn)复杂度的算法
  // 可以在1秒之内轻松处理100万数量级的数据
  // 注意：不要轻易尝试使用SelectionSort, InsertionSort或者BubbleSort处理100万级的数据
  // 否则，你就见识了O(n^2)的算法和O(nlogn)算法的本质差异：）
  let arr1 = SortTestHelper.generateRandomArray(N, 0, 100000);
  SortTestHelper.testSort(MergeSort, [...arr1]);
}

main();
