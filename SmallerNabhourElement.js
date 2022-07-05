/*
Smaller neighbour element
Given an array A having N positive integers. Find the nearest smaller number for every element such that the smaller element is on left side.

Note - If any element doesn't have any smaller element that it to it's left, print -1 for it.

Sample Input
input: N = 5
A : 1 2 5 3 5
Sample Output
A: -1 1 2 2 3

*/

 const SmallerElement=(arr,n)=>{

      let st=[];
      let ans=[ -1 ]
      
      for(let i=0;i<n;i++){

           while(st.length!==0 && st[st.length-1] > arr[i] ){
 
             st.pop();
           }
          
       if(st.length===0){  
           st.push(arr[i])
       }else{
          ans.push(st[st.length-1])
          st.push(arr[i]);
       }


      }
      return ans;

 }  
 let arr=[1, 2 ,5 ,3 ,5]
let n=arr.length;
 console.log(SmallerElement(arr,n))




















