
/*

Sample Input
a+b-c+d*(e-f)/g+(h*(i/j))
Sample Output
ab+c-def-*g/+hij/*+
Sample Explanation
The postfix expression for the expression given in the sample input is given by the ouptut.

Expected Time Complexity
O(N^2), where N is the size of the expression.

Expected Space Complexity
O(M), where M is the number of operators in string.



*/

// Created an empty array



function precedence(c) {
    // Helper Function to determine precedence of each opearator
    if (c == '^')
        return 3;
    else if (c == '*' || c == '/')
        return 2;
    else if (c == '+' || c == '-')
        return 1;
    else
        return -1;
}
function infixPostfix(s, len) {
    // Function to convert infix expression to postfix
    let st = [];
    st.push('N');

    let ans = "";
    for (let i = 0; i < len; i++) {

        // If the scanned character is an operand, add it to output string.
        if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z'))
            ans += s[i];

        // If the scanned character is an ‘(‘, push it to the stack.
        else if (s[i] === '(')
            st.push('(');

        // If the scanned character is an ‘)’, pop and to output string from the stack until an ‘(‘ is encountered.
        else if (s[i] === ')') {
            while (st[st.length - 1] != 'N' && st[st.length - 1] !== '(') {
                let c = st[st.length - 1];
                st.pop();
                ans += c;
            }
            if (st[st.length - 1] === '(') {
                let c = st[st.length - 1];

                st.pop();
            }
        }

        //If an operator is scanned
        else {
            while (st[st.length - 1] !== 'N' && precedence(s[i]) <= precedence(st[st.length - 1])) {
                let c = st[st.length - 1]
                st.pop();
                ans += c;
            }
            st.push(s[i]);
        }
    }
    // Pop all the remaining elements from the stack
    while (st[st.length - 1] != 'N') {
        let c = st[st.length - 1]
        st.pop();
        ans += c;
    }

    console.log(ans)

}

let str = "a+b-c+d*(e-f)/g+(h*(i/j))"
let len = str.length
infixPostfix(str, len);












