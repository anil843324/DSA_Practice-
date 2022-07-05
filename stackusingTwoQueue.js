/*
Stack Using Two Queues
Implement a Stack using two queues q1 and q2 such that the stack supports two operations push() and pop()

Sample Input
push(2)
push(3)
pop()
push(4)
pop()
Sample Output
3 4
Sample Explanation
push(2) the stack will be {2}
push(3) the stack will be {2 3}
pop()   poped element will be 3 the stack will be {2}
push(4) the stack will be {2 4}
pop()   poped element will be 4

*/


    let q1 = [];
    let q2 = []
const StackUsingTwoQueue = (q, x) => {

    


     // push operaton costyly 
    if (q === 1) {


       if(q1.length===0){
      
         q1.push(x);
       

       }else{

        while (q1.length > 0) {
            let a = q1.pop();
            q2.push(a);
        }
       
        q1.push(x);

        while (q2.length > 0) {
            let a = q2.pop();
            q1.push(a);
        }

       }

        //  pop operaton o(1)
    } else {

       
        return q1.shift();




    }


  

}

console.log(q1)

let arr = [1, 2, 1, 3, 2, 1, 4, 2]
let n = arr.length
for (let i = 0; i < n; i++) {

    if (arr[i] === 1) {

        StackUsingTwoQueue(arr[i], arr[i + 1])
        i++;
    } else {

       console.log(StackUsingTwoQueue(arr[i]))

    }

}

/*
push(2) the stack will be {2}
push(3) the stack will be {2 3}
pop()   poped element will be 3 the stack will be {2}
push(4) the stack will be {2 4}
pop()   poped element will be 4  

*/