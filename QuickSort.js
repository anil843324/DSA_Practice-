/*
Sort Using Quick Sort
Given an input array, sort the array using Quick Sort

Note: Implement Quick Sort

Sample Input
N = 6
arr[] = { 2, 6, 3, 0, 4, 1 }

Sample Output
Sorted Array: 0 1 2 3 4 6

*/
function partition(arr, lo, hi) {

    let pivot = arr[lo]

    let i = lo;
    let j = hi;

    while (i < j) {

           while(arr[i]<=pivot)
           {
            i++;
           }
          
           while(arr[j]>pivot){
            j--;
           }

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
     [arr[j],arr[lo]]=[arr[lo],arr[j]]

  return j;


}

// Function for quick sort 

function quickSort(arr, lo, hi) {

    if (lo < hi) {

        // partitioning index

        let pi = partition(arr, lo, hi);

        // sort all elements before partition index
        quickSort(arr, lo, pi - 1);

        //sort all elements after partition index
        quickSort(arr, pi + 1, hi);

    }
    return arr;
}



let N = 6;

let arr = [-1, 6, 3, 0, -2, 1];

console.log(quickSort(arr, 0, N - 1))




