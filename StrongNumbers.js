function is_StrongNumber(n) {
  //code here
   let reverN=n;
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    let temp = 1;
    for (let i = 1; i <= rem; i++) {
      temp *= i;
    }
    sum += temp;

    n = Math.floor(n / 10);
  }
   
  if (sum === reverN) {
    return 1;
  } else {
    return 0;
  }
}
let n=145
let res=is_StrongNumber(n)

 console.log(res)
