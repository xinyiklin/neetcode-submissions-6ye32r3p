class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequency = {};
        for (const n of nums) {
            frequency[n] = (frequency[n] || 0) + 1;
        }
        const buckets = Array(nums.length + 1)
            .fill(null)
            .map(() => []);
        
        for (const [num, freq] of Object.entries(frequency)) {
            buckets[freq].push(Number(num));
        }

        const res = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const num of buckets[i]) {
                res.push(num);
                    if (res.length === k) {
                    return res;
                }
            }    
        }
        return res;
    }
}
