class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let enc = "";
        for(let i=0; i<strs.length; i++){
            enc+="|||||"+strs[i];
        }
        return enc;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const dec = str.split('|||||').splice(1);
        return dec;
    }
}
