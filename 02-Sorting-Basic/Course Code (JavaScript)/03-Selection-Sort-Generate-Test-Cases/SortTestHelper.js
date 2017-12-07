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
  }
};
