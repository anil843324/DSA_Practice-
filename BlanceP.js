/*
Balanced parenthesis
Given a string S having N characters. Any of the characters of the string are either of '(', '{', '[', ')', '}', ']'. Check whether the pairs and the orders of '{', '}', '(', ')', '[', ']' are correct or not.

Sample Input
input: N = 6
S : [()]{}
Sample Output
A: -"Yes"

*/

const CheckParenthesis = (S, n) => {

    let stack = [];

    for (let i = 0; i < n; i++) {


        if (S[i] === '[' || S[i] === '{' || S[i] === '(') {

            stack.push(S[i])

        } else {


            if (S[i] === ']' && stack[stack.length - 1] === '[' || S[i] === '}' && stack[stack.length - 1] === '{' || S[i] === ')' && stack[stack.length - 1] === '(') {

                stack.pop();

            }else{

                return false;
            }

        }

    }
    if(stack.length===0){
        return true;
    }else{

        return false;
    }

}

let s = '[})]'

let n = s.length;

console.log(CheckParenthesis(s, n))

