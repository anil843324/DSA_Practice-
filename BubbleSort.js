/*
Bubble sort
Given an array A having N positive integers. Sort the array A using bubble sort.

Sample Input

input: N = 5
A : 5 1 6 3 7

Sample Output
A: 1 3 5 6 7


*/


const BubbleSort = (arr) => {

   

    for (let  i = 0; i < n - 1; i++) {

        for ( let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]){

                [arr[j], arr[j + 1]]=[arr[j+1], arr[j]]

            }
        }
    }
    return arr;
}

let arr = [ 1, 8, 3, 2, 8]
let n = arr.length;

console.log(BubbleSort(arr, n))