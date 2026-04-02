class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);

        let maxLength = 0;
        for (const n of numSet) {
            if (numSet.has(n-1)) {
                continue;
            }
            let i = 1;
            while (numSet.has(n+i)) {
                i++;
            }
            maxLength = Math.max(i,maxLength);
        }
        return maxLength;
    }
}
