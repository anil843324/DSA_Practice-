

// } Driver Code Ends



  


 function  quickSort(arr, low, high){


    if (low < high) {


        let pivot = partition(arr, low, high);

        quickSort(arr, low, pivot+1)

        quickSort(arr, pivot+1, high)

    }


}


function partition(arr, low, high) {



    let pivot = arr[low]
    let i = low;
    let j = high;
    while (i < j) {


        while (arr[i] <= pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i < j) {

            [arr[i], arr[j]] = [arr[j], arr[i]]
        }


    }

    [arr[j], arr[low]] = [arr[low], arr[j]]

    return j;

}



function sortArr(n, arr) {
    // code here

    let low = 0;
    let high = n - 1;
    quickSort(arr, low, high)

  console.log(arr)
}
let arr=[1,4,6,2,3,7]
sortArr(arr.length,arr)