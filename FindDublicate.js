/*

FIND DUPLICATE IN AN ARRAY
Given an array A of N elements that contains elements from 1 to N-1. All elements occur once except one which occurs twice. Find the repeating element.

Sample Input
N = 5, A = [1, 3, 3, 2, 4].
Sample Output
Output: 3

*/

 const FindDublicate=(N,A)=>{
    
      let sum=0;
      for(let i=0;i<N;i++){
        sum=sum+A[i]
      } 

    //    find natural number
     let n=N-1;
    let   naturl=(n*(n+1))/2
     console.log(Math.abs(naturl-sum))
    

 }


 let N = 5
 
 let A = [1, 1, 3, 2, 4]

 FindDublicate(N,A)

