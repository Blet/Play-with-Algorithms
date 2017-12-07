module.exports = {
  generateRandomArray: function(n, rangeL, rangeR) {
    if (rangeL >= rangeR) {
      return;
    }

    let arr = Array(n);
    for (let i = 0; i < n; i++)
      arr[i] = parseInt(Math.random() * (rangeR - rangeL + 1) + rangeL);
    return arr;
  },

  printArray: function(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  },

  // 判断arr数组是否有序
  isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++)
      if (arr[i] > arr[i + 1] > 0) return false;
    return true;
  },

  /**
   * 测试排序性能
   * @param {function} func 测试排序的方法
   * @param {数组} arr 被测试的数组
   */
  testSort(func, arr, isShow) {
    let name = func.name;
    console.time(name);
    // 调用排序函数
    func(arr);
    if (isShow) {
      console.log(arr);
    }
    console.timeEnd(name); // 输出: Array initialize: 266.000ms
  },

  // 生成一个近乎有序的数组
  // 首先生成一个含有[0...n-1]的完全有序数组, 之后随机交换swapTimes对数据
  // swapTimes定义了数组的无序程度:
  // swapTimes == 0 时, 数组完全有序
  // swapTimes 越大, 数组越趋向于无序
  generateNearlyOrderedArray(n, swapTimes) {
    let arr = [];
    for (let i = 0; i < n; i++) arr[i] = parseInt(i);

    for (let i = 0; i < swapTimes; i++) {
      let a = parseInt(Math.random() * n);
      let b = parseInt(Math.random() * n);
      let t = arr[a];
      arr[a] = arr[b];
      arr[b] = t;
    }

    return arr;
  }
};
