function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    
    let n=+input[0]
    let arr=input[1].trim().split(" ").map(Number)
    arr.sort((a,b)=>a-b)
    let q=+input[2];
    let line=3;
     for(let i=0;i<q;i++){
         
         let [digit,x]=input[line++].trim().split(" ").map(Number);
         
       let res=Nikhil(n,arr,digit,x);
       console.log(res)
     }
  }
  
  function Nikhil(n,arr,digit,x){
      
        let index=-1;
         let low=0;
        let high=n-1;
      if(digit===0){
        while(low<=high){
            
            let mid=low+Math.floor((high-low)/2)
            
            if(arr[mid]>=x){
                high=mid-1;
                index=mid;
            }else if(arr[mid]<x){
                low=mid+1;
            }
        }
      }else{
        while(low<=high){
            
            let mid=low+Math.floor((high-low)/2)
            
            if(arr[mid]===x){
                low=mid+1
            }else if(arr[mid]>x){
                high=mid-1;
                index=mid;
            }
             else if(arr[mid]<x){
                low=mid+1;
            }
           
        }
      } 
      
      
        
    if(index===-1){
        return 0;
    }else{
        return n-index;
    }  
         
  }
  if (process.env.USERNAME === "anilkumar") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }