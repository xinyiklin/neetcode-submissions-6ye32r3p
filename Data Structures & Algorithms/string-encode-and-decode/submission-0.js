class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_string = [];
        for (const str of strs) {
            encoded_string.push(String.fromCharCode(str.length) + str);
        }
        console.log(encoded_string.join(''))

        return encoded_string.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        let decoded_string = [];
        for (let i = 0; i < str.length; i++) {
            const len = str[i].charCodeAt(0);
            const word = str.slice(i + 1, i + len + 1);
            decoded_string.push(word);
            i = i + len;
        }
        return decoded_string;
    }
}
