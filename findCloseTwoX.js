const close = (arr, n, x) => {
  let left = 0;
  let right = 0;
  let i = 0;
  let j = n - 1;
  let diff = Number.MAX_SAFE_INTEGER;

  while (j > i) {

    let findDiff = Math.abs(arr[i] + arr[j] - x);

    if (findDiff < diff) {
      left = arr[i];
      right = arr[j];
      diff = findDiff;
    }

    if (arr[i] + arr[j] < x) {
      i++;
    }else{
        j--;
    }
  }

 return [left,right].join(" ")


};

let arr = [10, 22, 28, 29, 30, 40];
let n = arr.length;

let res = close(arr, n, 54);
console.log(res);
