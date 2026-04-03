class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (const token of tokens) {
            if (token === '+') {
                const r = stack.pop();
                const l = stack.pop();
                stack.push(l + r);
            } else if (token === '-') {
                const r = stack.pop();
                const l = stack.pop();
                stack.push(l - r);
            } else if (token === '*') {
                const r = stack.pop();
                const l = stack.pop();
                stack.push(l * r);
            } else if (token === '/') {
                const r = stack.pop();
                const l = stack.pop();
                stack.push(Math.trunc(l / r));
            } else {
                stack.push(parseInt(token));
            }
        }
        return stack[0];
    }
}
