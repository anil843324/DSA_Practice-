/*
Check for anagrams
Check whether two given strings X and Y of sizes N and M respectively are anagram of each other or not.

Sample Input
input: N = 4, X = abcd, M = 4, Y = dacb

Sample Output
Output: Yes

Sample Explanation
All the characters of string "abcd" is present in "dacb" and in same frequencies. Hence both are anagram of each other.

Expected Time Complexity
O(NLog(N)), where N is the lenght of the given string

Expected Space Complexity
O(1), i.e., constant space complexity.

*/


const checkAnagram = (x, y, xlen, ylen) => {

    if (xlen !== ylen) {
        return false;
    } else {
        x = x.split('').sort();
        y = y.split('').sort();
        for (let i = 0; i < xlen; i++) {
            if (x[i] !== y[i]) {
                return false;
            }
        }
        return true;
    }
}

let x = "abacd"
let y = "dacb"
let xlen = x.length;
let ylen = y.length;


console.log(checkAnagram(x, y, xlen, ylen))
