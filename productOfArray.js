// Maximum Product Subarray

const product = (n, arr) => {
  let max = arr[0];
  let min = arr[0];
  let result = arr[0];
  let ans = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] < 0) {
      let temp = max;
      max = min;
      min = temp;
    }
    max = Math.max(arr[i], BigInt(max) * BigInt(arr[i]));
    min = Math.min(arr[i], BigInt(min) * BigInt(arr[i]));
    result = Math.max(max, min);
    if (ans < result){

        ans = result;
    } 
  }
  return ans;
};

let N = 5;
let arr = [6, -3, -10, 0, 2];
let ans = product(N, arr);

console.log(ans);
