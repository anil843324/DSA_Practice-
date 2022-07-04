/*
Queue Using Two Stacks
Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types (i) 1 x (a query of this type means pushing 'x' into the queue) (ii) 2 (a query of this type means to pop element from queue and print the poped element)

Sample Input
5
1 2 1 3 2 1 4 2
Sample Output
2 3
Sample Explanation
In the first testcase
1 2 the queue will be {2}
1 3 the queue will be {2 3}
2   poped element will be 2 the queue will be {3}
1 4 the queue will be {3 4}
2   poped element will be 3.


*/
let s1 = [];
    let s2 = []
const QueueUsingStack = (q, x) => {

     let ans=0;

    if (q === 1) {

         s1.push(x)

    } else {

        while (s1.length > 0) {
            let a = s1.pop();
            s2.push(a);
        }
       
         ans=s2.pop();

        while (s2.length > 0) {
            let a = s2.pop();
            s1.push(a);
        }
        return ans;

    }


  

}

let arr = [1, 2, 1, 3, 2, 1, 4, 2]
let n = arr.length
for (let i = 0; i < n; i++) {

    if (arr[i] === 1) {

    QueueUsingStack(arr[i], arr[i + 1])
        i++;
    } else {

       console.log(QueueUsingStack(arr[i]))

    }

}



