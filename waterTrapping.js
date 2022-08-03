const trapping = (arr, n) => {
  let lmax = [];
  let rmax = [];

  for (let i = 0; i < n; i++) {
    lmax.push(0);
    rmax.push(0);
  }

  lmax[0] = arr[0];

 rmax[n-1]=arr[n-1]

//   left side checking 
        for(let i=1;i<n;i++){

            let temp=Math.max(arr[i],lmax[i-1])
             lmax[i]=temp;
        }
 
// right side

 
for(let i=n-2;i>=0;i--){

    let temp=Math.max(arr[i],rmax[i+1])
     rmax[i]=temp;
}

let water=0;

  for(let  i=1;i<n-1;i++){

        water=water+Math.min(lmax[i],rmax[i])-arr[i]
      
    
  }

   return water;



};
let arr = [3, 0, 0, 2, 0, 4];
let n = arr.length;

trapping(arr, n);
