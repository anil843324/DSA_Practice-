function findNumberOfTriangles(arr, n) {
  arr.sort((a, b) => a - b);

  let count = 0;

  for (let i = n - 1; i >= 0; i--) {
    let l = 0;
    let r = i - 1;

    while (l < r) {
      if (arr[l] + arr[r] > arr[i]) {
        count = count + (r - l);
        r--;
      }else{
        l++;
      }
    }
  }

  console.log(count);
}

findNumberOfTriangles([4,6,7,8,9], 5);
