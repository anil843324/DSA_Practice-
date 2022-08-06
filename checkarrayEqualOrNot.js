function check(A, B, N) {
  // code here

  let mp = new Map();
  let mp2 = new Map();

  for (let i = 0; i < N; i++) {
    if (mp.has(A[i])) {
      mp.set(A[i], mp.get(A[i]) + 1);
    } else {
      mp.set(A[i], 1);
    }
  }

  for (let i = 0; i < N; i++) {
    if (mp2.has(B[i])) {
      mp2.set(B[i], mp2.get(B[i]) + 1);
    } else {
      mp2.set(B[i], 1);
    }
  }

  for (let i = 0; i < N; i++) {

      

    if (mp.get(A[i]) !== mp2.get(A[i])   ) {
      return 0;
    }
  }
  console.log(mp2);
  return 1;
}


let a=[1 ,2, 3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]
let b=[0 ,9 ,8 ,7 ,6 ,5 ,4 ,3 ,2 ,1]
let n=a.length;
let res=check(a,b,n)

console.log(res)