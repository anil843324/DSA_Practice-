function findSum(X, Y) {
  // code here
  let res = "";

  let i = X.length - 1;
  let j = Y.length - 1;

  let carry = 0;

  while (i >= 0 || j >= 0 || carry !== 0) {
    let ival = i >= 0 ? Number(X[i]) : 0;

    let jval = j >= 0 ? Number(Y[j]) : 0;
    i--;
    j--;

    let sum = ival + jval + carry;

    res = (sum % 10) + res;

    carry = Math.floor(sum / 10);
  }

  let k = 0;
  let ans=res.split("").map(Number)
 
  while (k < res.length) {
    if (ans[0] === 0) {
        ans.shift();
    }else{
       break;
    }

    k++;
  }
 
   if(ans.length){
     return ans.join("")
   }else{
    return 0;
   }



}

let X = "00";
let Y = "0000";
let res=findSum(X, Y);
console.log(res)