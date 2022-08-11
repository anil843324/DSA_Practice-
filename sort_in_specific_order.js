function  sortIt(arr,n){
    //code here
    
    let even=[]
    let odd=[]
    
    for(let i=0;i<n;i++){
        
        
         if(arr[i]%2===0){
             even.push(arr[i])
         }else{
             
             odd.push(arr[i])
         }
        
        
    }
    even.sort((a,b)=>a-b)
    odd.sort((a,b)=>b-a)
    
     return [...odd,...even]
    
    
}
let N = 7
 let arr = [1, 2, 3, 5, 4, 7, 10]

let res=sortIt(arr,N)
console.log(res);