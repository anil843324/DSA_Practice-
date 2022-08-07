function convertFive(num)
{
    // code here
    
     let str=''
    while(num>0){
        
          let rem=num%10;
           
            if(rem===0){
                str=str+5;
            }else{
                str=str+rem;
            }
           
           num=Math.floor(num/10)
        
    }
    
    return str.split("").map(Number).reverse().join("");
    
    
}

let res=convertFive(1004)
console.log(res)