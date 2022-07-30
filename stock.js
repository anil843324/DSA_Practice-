function stockBuySell(A, n)
{
    //your code here
    
          
    let max=-1;
    let i=0;
   for(let j=1; j<n; j++){
       
        
        if(A[j]<=A[i]){
             let currMax=A[j-1]-A[i];
             
             max=Math.max(currMax,max)
             i=j;
        }
        
       
       
   } 
    
      
     if(max>0){
          return 1;
     }else if(max===0){
         return 0
     }else{
        return "No Profit"
     }
    
}



let res=stockBuySell([100 ,180 ,260 ,310 ,40 ,535 ,695],7)

console.log(res);