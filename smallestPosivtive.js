function missingNumber(arr, n) {
  //your code here

  arr.sort((a, b) => a - b);

  for (let i = 0; i < n-1; i++) {
    if (arr[i] > 0) {
      if (arr[i + 1] - arr[i] !== 1) {
        return arr[i + 1] - arr[i];
      }
    }
  }

  return arr[n - 1] + 1;
}

let ans = missingNumber([1, 2, 3, 4, 5], 5);

console.log(ans);
