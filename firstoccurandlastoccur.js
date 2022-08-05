function find(arr, n, x) {
  //code here

  let low = 0;
  let high = n - 1;

  let ans = -1;
  let ans2=-1;

   // left side searching
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) {
      ans=mid;
      high = mid - 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  low=0;
  high=n-1;

  // right side
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) {
      ans2=mid;
      low = mid + 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }


  return [ans,ans2]
}

let arr = [1,   67, 123, 125];

let n = arr.length;
let x = 5;
let res = find(arr, n, x);

console.log(res);
