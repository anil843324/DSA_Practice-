
function atoi(s) {
  //code here 
  let res = 0;
  let minus = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '-') {
      minus = false;
      continue;
    }

    let num = s[i] - '0'
    let flag = true;
    for (let i = 0; i <= 9; i++) {

      if (i === num) {
        res = res * 10 + num;
        flag = false;
      }
    }
    if (flag) {
      return -1;
    }

  }

  if (minus) {
    return res;
  } else {
    return res * -1;
  }


}

let str = '1234'
let res = atoi(str)
console.log(res);