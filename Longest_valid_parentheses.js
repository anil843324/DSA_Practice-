function maxLength(s) {
  //code here

  let max = 0;
  let stack = [];
  stack.push(-1);
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === "(") {
      stack.push(i);
    } else {
      stack.pop();

      if (stack.length === 0) {
        stack.push(i);
      } else {
        let len = i - stack[stack.length - 1];
        max = Math.max(len, max);
      }
    }
  }
  return max;
}
let S = ")()())";

let res = maxLength(S);
console.log(res);
