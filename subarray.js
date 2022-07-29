const find = (arr, n) => {
  let count = 0;
  let mp = new Map();

  mp.set(0, 1);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      sum += -1;
    } else {
      sum += 1;
    }

    if (mp.has(sum)) {
      count += mp.get(sum);
      mp.set(sum, mp.get(sum) + 1);
    } else {
      mp.set(sum, 1);
    }
  }

  console.log(count);
};

let n = 7;
//0 1 2 3 4 5 6
let arr = [1, 0, 0, 1, 0, 1, 1];
find(arr, n);

/*


*/
