module.exports = function BubbleSort(arr) {
  let n = arr.length;
  let newn; //使用newn进行优化

  do {
    newn = 0;
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i);

        // 记录最后一次的交换位置,在此之后的元素在下一轮扫描中均不考虑

        newn = i;
      }
    }
    n = newn;
  } while (newn > 0);
};

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}
