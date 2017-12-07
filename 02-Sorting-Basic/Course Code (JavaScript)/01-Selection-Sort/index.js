function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function SelectionSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        //   // 寻找[i, n)区间里的最小值的索引
        minIndex = j;
      }

      swap(arr, i, j);
    }
  }
}

function main() {
  let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  SelectionSort(arr);
  arr.map(item => console.log(item));
}

main();
