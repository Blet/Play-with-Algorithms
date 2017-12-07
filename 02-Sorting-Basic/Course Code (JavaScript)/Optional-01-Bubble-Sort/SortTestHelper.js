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
  }

  // generateNearlyOrderedArray(arr)
};
