class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    keyGen(str){
        return str.split('').sort().join('');
    }
    groupAnagrams(strs) {
        const hashmap={};
        for(let i=0; i<strs.length; i++){
            const cs = strs[i];
            const key = this.keyGen(cs);
            if(!hashmap[key]){
                hashmap[key]=[cs];
            }else{
                hashmap[key].push(cs);
            }
        }
        return Object.values(hashmap)
    }
}
