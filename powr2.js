function isPowerofTwo(n)
{
    // code here
    
    if(n===0){
        return false;
    }
    
     if(n===1){
         return true;
     }
    
    for(let i=1;i<=n;i++){
            let find=Math.pow(2,i)
      
             if(find===n){
                return true;
             }else if(find>n){
                return false;
             }

              
    }

    
}

n=23;
 console.log(isPowerofTwo(n))