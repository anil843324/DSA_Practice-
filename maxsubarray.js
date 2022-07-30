function maxProduct(arr, n) {
  //code here
  let ans = arr[0];

  let ma = ans;
  let mi = ans;

  for (let i = 1; i < n; i++) {
    if (arr[i] < 0) {
      let temp = ma;
      ma = mi;
      mi = temp;
    }
      
    ma = Math.max(arr[i], ma * arr[i]);
    mi = Math.min(arr[i], mi * arr[i]);
    ans = Math.max(ans, ma);
  }

  return ans;
}

let arr = [-8, 5, 3, 1, 6];
let n = arr.length;

let ans = maxProduct(arr, n);

console.log(ans);
