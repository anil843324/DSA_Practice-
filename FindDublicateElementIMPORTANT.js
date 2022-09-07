function FindDublicate(arr) {

    // find dublicate value form array
  let ans=0;

   for(let i=0;i<arr.length;i++){

     ans=ans^arr[i]
   }
  
   for(let i=1;i<arr.length;i++){

    ans=ans^i;
  }
   return ans;



}

let arr = [6, 3, 1, 5, 4, 3, 2];
let n = arr.length;

console.log(FindDublicate(arr, n));
