
 const  configuration=(n,arr)=>{

  let sum=0;
  let s0=0;
  

  for(let i=0;i<n;i++){
    sum+=arr[i];
    s0+=arr[i]*i;
  }

  let max=s0;
  let si=s0;

  for(let i=0;i<n-1;i++){

    let sip1=si+sum-n*arr[n-i-1];
     
     if(sip1>max){
        max=sip1;
     }
     si=sip1;
  }
   return max;
 }
let  n = 4
 let arr= [8,3,1,2]

let res= configuration(n,arr)
console.log(res);