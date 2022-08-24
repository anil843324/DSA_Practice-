function subArrayExists(arr, n) {
    // code here

    let mp = new Map();

    let currSum = 0;

    let start = 0;
    let end = -1;

    for (let i = 0; i < n; i++) {

        currSum += arr[i];

        if(currSum-0===0){
            start=0;
            end=i
            break;
        }


        if (mp.has(currSum - 0)) {

            start = mp.get(currSum - 0) + 1
            end = i;
            break;
        }
        mp.set(currSum, i)


    }

    if (end === -1) {
        return "No"
    } else {
        return "Yes"
    }

}

let n = 2
let arrr = [10,-10]
console.log(subArrayExists(arrr, n)) 