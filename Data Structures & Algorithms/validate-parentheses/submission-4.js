class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const brackets = {
            ')': '(',
            ']': '[',
            '}': '{',
        };
        for (const c of s) {
            if (brackets[c]) {
                if (stack.length > 0 && stack[stack.length - 1] === brackets[c]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
}
