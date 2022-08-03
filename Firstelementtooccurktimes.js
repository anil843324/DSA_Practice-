function firstElementKTime(arr,n,k){
    //code here
    
    let mp= new Map();
    
    
    for(let i=0;i<n;i++){
        
        if(mp.has(arr[i])){


            mp.set(arr[i] ,mp.get(arr[i])+1)
            if(mp.get(arr[i])===k){
                 return arr[i]
            }

        }else{
            
            mp.set(arr[i],1)
          
        }
        
    }
    
   for(const [key,value] of mp){

     if(value>k){
         return -1;
     }
   }
    
   return arr[0]
   

    
    
    
    
}

let arr=[1, 7, 4, 3, 4, 8, 7]

let n = 7

 let k = 2
let res=firstElementKTime(arr,n,k)

console.log(res)