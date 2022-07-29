function doUnion() {
  // code here

  let mp=new Map()   
  arr.sort((a,b)=>a-b)
   const subsets = [[]];

for (const el of arr) {
  const last = subsets.length-1;
  for (let i = 0; i <= last; i++) {
      subsets.push( [...subsets[i], el] );
  }
}

for(let i=0;i<subsets.length;i++){
 
 let sum=0
  for(let j=0;j<subsets[i].length;j++){
      
      sum=sum+subsets[i][j]
      
  }
 mp.set(sum,true)
 
 
}
  
  
  
  
for(let i=0;i<=mp.length;i++){
 
if(!mp.has(i)){
   return i;
}
}  
  
  
  
  








}

// 5 3
// let arr1=[1 ,2 ,3 ,4 ,5]
// let arr2=[1 ,2 ,3]

 let res=doUnion([1 ,2 ,3],3)
 console.log(res);