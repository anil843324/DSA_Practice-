function findSum(X, Y) {
  // code here

  let ans = [];
  let l1 = X.length;
  let l2 = Y.length;
  let carry = 0;
  let i = l1 - 1;
  let j = l2 - 1;

  while (i >= 0 && j >= 0) {
    let sum = Number(X[i]) + Number(Y[j]) + carry;

    carry = Math.floor(sum / 10);
    let rem = sum % 10;
    ans.push(rem);

    i--;
    j--;
  }
  // if(carry){
  //     ans.push(carry)
  // }
  if (i >= 0) {
    while (i >= 0) {
      if (carry > 0) {
        let sum = Number(X[i]) + carry;

        carry = Math.floor(sum / 10);
        let rem = sum % 10;
        ans.push(rem);
        i--;
      } else {
        ans.push(Number(X[i]));

        i--;
      }
    }
  }else if (j>=0){
    while (j >= 0) {
        if (carry > 0) {
          let sum = Number(Y[j]) + carry;
  
          carry = Math.floor(sum / 10);
          let rem = sum % 10;
          ans.push(rem);
          j--;
        } else {
          ans.push(Number(Y[j]));
  
          j--;
        }
      }



  }else{
    if(carry>0){
        ans.push(carry)
    }
     
  }










  console.log(ans.reverse().join(""));
}

let X = "00000";
let Y = "0000000";
findSum(X, Y);
