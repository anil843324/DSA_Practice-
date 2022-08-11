function countPairs(arr1, arr2, n, m, x) {
  //code here

  let l1 = 0;
  let l2 = 0;
  let count = 0;
  if (n >= m) {
    l1 = n - 1;
    l2 = 0;
    while (l1 >= 0 && l2 < m) {
      if (arr1[l1] + arr2[l2] === x) {
        count++;
        l2++;
      } else if (arr1[l1] + arr2[l2] < x) {
        l2++;
      } else {
        l1--;
      }
    }
  } else {
    l1 = 0;
    l2 = m - 1;
    while (l1 < n && l2 >= 0) {
      if (arr1[l1] + arr2[l2] === x) {
        count++;
        l1++;
      } else if (arr1[l1] + arr2[l2] < x) {
        l1++;
      } else {
        l2--;
      }
    }
  }

  return count;
}

let sum = 44;
let arr1 = [3, 12, 26, 40, 50, 60, 69, 80, 89, 91, 98];
let arr2 = [
  2, 6, 7, 10, 15, 16, 20, 23, 27, 29, 30, 35, 36, 41, 46, 51, 53, 57, 58, 61,
  62, 65, 66, 73, 75, 77, 78, 86, 89, 90, 93, 96, 97,
];
let N = arr1.length;
let M = arr2.length;
let res = countPairs(arr1, arr2, N, M, sum);

console.log(res);
