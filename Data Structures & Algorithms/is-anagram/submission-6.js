class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        let count = {}

        for (const c of s) {
            if (count[c]) {
                count[c] += 1;
            } else {
                count[c] = 1;
            }
        }
        
        for (const c of t) {
            if (!count[c]) {
                return false;
            }
            count[c] -= 1;
        }
        return true;
    }
}
