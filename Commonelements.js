function commonElements(arr1, arr2, arr3, n1, n2, n3) {
  //code here
  let mp1 = new Map();
  let mp2 = new Map();
  let mp3 = new Map();
  let ans = [];
  for (let i = 0; i < n1; i++) {
    mp1.set(arr1[i],1);
  }

  for (let i = 0; i < n2; i++) {
    mp2.set(arr2[i],1);
  }
  for (let i = 0; i < n3; i++) {
    mp3.set(arr3[i],1);
  }

  for (let i = 0; i < n1; i++) {
    if (mp1.has(arr1[i]) && mp2.has(arr1[i]) && mp3.has(arr1[i])) {
      ans.push(arr1[i]);
      mp1.delete(arr1[i])
    }
  }

    return ans.length >  0? ans:[-1]

     
   
}

// n1 = 6; A = {1, 5, 10, 20, 40, 80}
// n2 = 5; B = {6, 7, 20, 80, 100}
// n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}

let res=commonElements([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120], 6, 5, 8);
console.log(res)