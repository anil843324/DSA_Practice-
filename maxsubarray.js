function maxProduct(arr,n){

    //code here
     let max=Number.MIN_SAFE_INTEGER;
    
    for(let i=0;i<n;i++){
        
        let sum=1;
        
        for(let j=i;j<n;j++){
            
            sum=sum*arr[j];
            
            max=Math.max(sum,max);
            
        }
        
        
    }
    
    return max
      
    
}

let arr=[6, -3, -10, 0, 2];
let n=arr.length;

let ans=maxProduct(arr,n)

console.log(ans)