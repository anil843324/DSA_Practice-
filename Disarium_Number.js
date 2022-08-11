function isDisarium(n) {
  //code here
  let num_str = String(n);

  let sum = 0;

  for (let i = num_str.length - 1; i >= 0; i--) {

    let num=Number(num_str[i])

    sum = sum + (num**i)
    j--;
  }

  if (n === sum) {
    return 1;
  } else {
    return -1;
  }
}

let res = isDisarium(89);
console.log(res);
