/*
Given a string of length N. Check if the given string is a palindrome without using any built-in functionality.

Sample Input
input: N = 9, string: malayalam
Sample Output
Output: Yes

*/


const checkPrime = (str, n) => {

    let l = 0;
    let r = n - 1;

    while (l < r) {

        if (str[l] !== str[r]) {
            return "No"
        } else {

            l++;
            r--;

        }
    }
    return "Yes"

}

let str = 'kayak'

let n = str.length

console.log(checkPrime(str, n))
