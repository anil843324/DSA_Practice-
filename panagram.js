function checkPangram(str) {
  let mp = new Map();
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  let min = "a".charCodeAt(0);
  let max = "z".charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    let asi = str.toLowerCase().charCodeAt(i);

    if (asi >= min && asi <= max) {
      mp.set(str[i].toLowerCase(), 1);
    }
  }
  let count = 0;
  for (let i = 0; i < alpha.length; i++) {
    if (mp.has(alpha[i])) {
      count++;
    }
  }
  if (count === 26) {
    return 1;
  } else {
    return 0;
  }
}
S = "Bawds"
let res=checkPangram(S)
console.log(res)