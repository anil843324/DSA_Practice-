/*
Sort an Array of 0s, 1s, or 2s
Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

Sample Input
array = {0, 1, 2, 0, 1, 2}
Sample Output
array = {0, 0, 1, 1, 2, 2}
Sample Explanation
The array on sorting gives the resultant array as shown in the output  
Expected Time Complexity
O(N), where N is the size of the array.

Expected Space Complexity
O(1),Auxilliary Space


*/


const sperate = (arr, n) => {
    //   Dutch National Flag Algorithm
    // otimize way
    //  T.C O(n)
    //  S.C S(1)
  
    let l = 0;
    let mid = 0;
    let h = n - 1;
  
    while (mid <= h) {
      if (arr[mid] === 0) {
        let temp = arr[l];
        arr[l] = arr[mid];
        arr[mid] = temp;
        l++;
        mid++;
      } else if ( arr[mid] === 1 ) {
        mid++;
      } else {
        let temp = arr[mid];
        arr[mid] = arr[h];
        arr[h] = temp;
  
        h--;
        // mid++;
      //  who taking care about l so, 
      // you don't need to increased
      }
    }
  
    console.log(arr);
  };
  
  let arr = [0, 0, 2, 1, 1, 0, 2, 1, 0];
  let n = arr.length;
  sperate(arr, n);


