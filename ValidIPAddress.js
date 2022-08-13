function isValid(s) {
  //code here

  let arrstr = new Map();

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ".") {
      count++;
    }
  }

  if (count !== 3) {
    return 0;
  }

  for (let i = 0; i <= 18; i++) {
    arrstr.set(String(i), true);
  }

  count = 0;

  let temp = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ".") {
      temp = temp + s[i];
    } else {
      if (arrstr.has(temp)) {
        count++;
      }
      temp = "";
    }
  }
  if (arrstr.has(temp)) {
    count++;
  }

  console.log(arrstr);
  if (count === 4) {
    return 1;
  } else {
    return 0;
  }
}

let str = "12.18.0.1";
let res = isValid(str);

console.log(res);
