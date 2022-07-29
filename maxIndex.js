const findMaxIndex = (A, N) => {
    let i = 0;
    let j = N - 1;
    let res = 0;
    while (i < j) {
      if (A[i] <= A[j]) {
        res = Math.max(res, j - i);
        //cout<<res<<endl;
        i++;
        j = N - 1;
      } else if (j === i + 1) {
        j = N - 1;
        i++;
      } else j--;
    }
    return res;

//   17  corect 14
//97 65 24 84 10 82 2 51 1 91 62 59 80 76 26 66 11
// 0 1  2  3  4  5 6  7  8 9  10 11 12 13 14 15 16  
                                                                                    
};

let arr = [97 ,65 ,24 ,84 ,10 ,82, 2 ,51 ,1, 91 ,62 ,59 ,80, 76 ,26 ,66 ,11];

let res = findMaxIndex(arr, arr.length);

console.log(res);
