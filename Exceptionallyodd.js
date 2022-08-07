function getOddOccurrence(arr, n) {
  //code here

  let mp = new Map();

  for (let i = 0; i < n; i++) {
    if (mp.has(arr[i])) {
      mp.set(arr[i], mp.get(arr[i]) + 1);
    } else {
      mp.set(arr[i], 1);
    }
  }

  let ans = 0;
  let anskey = 0;

  for (const [key, value] of mp) {
    if (key % 2 !== 0) {
      if (value > ans) {
        anskey = key;
        ans = value;
      }
    }
  }

  console.log(anskey);
}

let arr = [1, 2, 3, 2, 3, 1, 3];
let N = 7;
getOddOccurrence(arr, N);
