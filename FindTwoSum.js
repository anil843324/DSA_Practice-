
var twoSum = function(nums, n,target) {

    let numsMap = new Map()
    for(let i = 0 ; i < n ; i++) {
        const result = numsMap.get(target - nums[i])
        if (typeof result !== "undefined") {
            return [ result , i ]
        }
        numsMap.set(nums[i],i)
    }

}

let arr=[3,2,4];
let n=arr.length;
let target=6
 let res=twoSum(arr,n,target)

 console.log(res)