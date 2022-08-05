function searchInSorted(arr, n, K) {
  //your code here

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = low + Math.floor((high-low) / 2);

    if (arr[mid] === K) {
      return 1;
    } else if (arr[mid] < K) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

let arr = [1, 2, 3, 4, 6];
let n = arr.length;
let k = 6;
let res = searchInSorted(arr, n, k);
console.log(res);
