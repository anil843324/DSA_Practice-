function isdivisible7(num) {
  // code here

  let i;
  let x;
  let rem = 0;
  let n = num.length;
  let m;
  for (i = 0; i < n; i++) {
    x = num[i];
    x = Number(x);
    m = rem * 10 + x;
    rem = m % 7;
  }
  if (rem == 0) return 1;
  else return 0;


}

let number = "8955795758";

 console.log(isdivisible7(number));
