const configuresum = (n,a) => {
  let sum = 0;
  let ans = sum;
  for (let i = 0; i < n; i++) {
    sum = sum + a[i] * i;
  }

  for (let i = 1; i < n; i++) {
    let lastE = a.pop();

    a.unshift(lastE);
    let sum1 = 0;
    for (let i = 0; i < n; i++) {
      sum1 = sum1 + a[i] * i;
    }
    ans = Math.max(sum1, ans);
  }

  return ans;
};

let N = 4
let arr = [8,3,1,2]
let res=configuresum(N,arr)

 console.log(res);