class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagramsDict = {};
        for (let str of strs) {
            const key = str.split('').sort().join('');
            if (anagramsDict[key]) {
                anagramsDict[key].push(str);
            } else {
                anagramsDict[key] = [str];
            }
        }
        const anaArr = [];
        for (const arr of Object.values(anagramsDict)) {
            console.log(arr);
            anaArr.push(arr);
        }
        return anaArr;
    }
}
