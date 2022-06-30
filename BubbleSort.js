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

    let i = 0;
    let j = i + 1;

    for (i = 0; i < n; i++) {

        for (j = i + 1; j < n - 1; j++) {

            if (arr[i] > arr[j]) {

                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i = 0;
                j = i + 1;
                break;
            }

        }

    }
    return arr;

}

let arr = [-8, 1, 8, 3, 2, 8]
let n = arr.length;

console.log(BubbleSort(arr, n))