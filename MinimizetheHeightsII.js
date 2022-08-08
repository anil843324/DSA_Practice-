
   function getMinDiff(arr, N, K) {
      // your code here
      
       if(N===1){
        return 0;
       }
      arr.sort((a,b)=> a-b)
      let diff=arr[N-1]-arr[0];

      let max=0;
      let min=0;

      for(let i=1;i<N;i++){

          if(arr[i]-K<0)continue;
       
          max=Math.max( arr[i-1]+K  ,arr[N-1]-K)

          min=Math.min( arr[0]+K,arr[i]-K);
         diff=Math.min(diff,max-min)
      }

      return diff;
  }


 let K = 5
 let  N = 10
let arr = [2 ,6 ,3 ,4, 7, 2, 10, 3, 2, 1]

let res=getMinDiff(arr,N,K)

 console.log(res)