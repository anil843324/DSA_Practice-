function interSection(arr1, arr2, n1, n2) {
    // first apporoach

    if (n1 < 2 && n2 < 2) {
        return -1;
    }

       let ans = [];
        let i = 0;
        let j = 0;
        while (i < n1 && j < n2) {
            if (arr1[i] === arr2[j]) {
                ans.push(arr1[i]);
                i++;
                j++;
            } else {
                if (arr1[i] < arr2[j]) {
                    i++;
                } else {
                    j++;
                }
            }
        }
    
     return ans;
}


let arr1 = [2, 2, 3 ,3];

let arr2 = [1 ,2 ,2, 3];



let n1 = arr1.length;
let n2 = arr2.length;
let res = interSection(arr1, arr2, n1, n2);

console.log(res)
