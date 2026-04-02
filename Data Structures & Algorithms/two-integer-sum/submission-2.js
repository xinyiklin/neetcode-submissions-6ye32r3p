class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numDict = {};
        for (let i = 0; i < nums.length; i++) {
            if (target - nums[i] in numDict) {
                return [numDict[target - nums[i]], i];
            }
            numDict[nums[i]] = i;
        }
        return [];
    }
}
