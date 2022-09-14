var trap = function(heights) {
    
    
    // let leftArr=[];
    //  leftArr.push(height[0]);
    
    // let rightArr=[];
    // rightArr.push(height[height.length-1]);
    
    // // left
    // for(let i=0;i<height.length-1;i++){ 
    //      let max=Math.max(leftArr[i],height[i+1] )       
    //      leftArr.push(max)       
    // }
    
    //  // right
    // for(let i=height.length-1;i>0;i--){             
    //        let right=rightArr[0];            
    //     let max=Math.max(right,height[i-1] );       
    //      rightArr.unshift(max)  
    // } 
    
    // let count=0;
    
    // for(let i=0;i<height.length;i++){       
    //        count+=Math.min(leftArr[i],rightArr[i])-height[i];
    // }

    // return count

    let left = 0
    let right = heights.length - 1 
    
     let water = 0;
 
     let maxLeft = heights[left];
    let maxRight = heights[right];

    while (left < right)
    {
        if (heights[left] <= heights[right])
        {
            left++;
            maxLeft = Math.max(maxLeft, heights[left]);
            water += (maxLeft - heights[left]);
        }
        else {
            right--;
            maxRight = Math.max(maxRight, heights[right]);
            water += (maxRight - heights[right]);
        }
    }

    return water;


};
let arr=[3,1,2,4,0,1,3,2];

 console.log(trap(arr));