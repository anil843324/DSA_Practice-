/*

Power of 2
Given a positive integer N. Check if it is a power of two or not.

Sample Input
input: N = 4

Sample Output
Output: Yes




*/

const PowerOfTwo = (n) => {

    while (n) {

        let rem = n % 2;

        if (rem === 0) {

            n = Math.floor(n / 2)
            if (n === 1) {
                return "Yes"
            }

        } else {

            return "No"
        }
    }




}

let n = 89;

console.log(PowerOfTwo(n))