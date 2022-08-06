function factorial(N) {
  //code here

  // let ans = [];
  // ans.push(1);

  // for (let i = 2; i <= N; i++) {
  //   let carry = 0;

  //   for (let j = 0; j < ans.length; j++) {
  //     let val = ans[j] * i + carry;
  //     ans[j] = val % 10;
  //     carry = Math.floor(val / 10);
  //   }
  //   while (carry !== 0) {
  //     ans.push(carry % 10);
  //     carry = Math.floor(carry / 10);
  //   }
  // }

  // ans.reverse();

  // return ans;

   let ans=[]
   ans.push(1)

  for(let i=2;i<=N;i++){

       let carry=0;

       for(let j=0;j<ans.length;j++){

              let val=ans[j]*i+carry;
                ans[j]=val%10;
                carry=Math.floor(val/10)
               
       }
       while(carry!==0){
         
          ans.push(carry%10)
       carry=Math.floor(carry/10)

       }
  }

  return  ans.reverse();
}

let res = factorial(5);
console.log(res);
