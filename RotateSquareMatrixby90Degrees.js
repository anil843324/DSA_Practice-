
/*
Rotate square matrix by 90 degrees
Given a square matrix of size N*N. Print the matrix after rotating it by 90 degrees in anti-clockwise direction.

Sample Input
input: N = 3
Matrix : 1 2 3
     4 5 6
     7 8 9
Sample Output
Output: 3 6 9
    2 5 8
    1 4 7


*/

const rotate = (matrix, r, c) => {

    for (let i = c - 1; i >= 0; i--) {

        let p = ''

        for (let j = 0; j < r; j++) {


            p = p + matrix[j][i] + " "

        }
        console.log(p)


    }



}
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let r = matrix.length;
let c = matrix[0].length;
rotate(matrix, r, c)