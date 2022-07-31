function missingNumber(arr, n) {
  //your code here

  let mp = new Map();

  for (let i = 0; i < n; i++) {
    mp.set(arr[i], true);
  }
  console.log(mp);
let i=1;
  for (i = 1; i <= n; i++) {
    if (!mp.has(i)) {
      return i;
    }
  }
  return i;
}

let ans = missingNumber([1,2,3,4,5], 5);

console.log(ans);
