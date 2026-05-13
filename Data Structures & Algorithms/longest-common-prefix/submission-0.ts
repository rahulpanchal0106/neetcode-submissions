class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let ans="";
        strs.sort();
        const fw = strs[0];
        const lw = strs[strs.length-1];
        for(let i=0; i<fw.length; i++){
            if(fw[i]==lw[i]){
                ans+=fw[i];
            }else{
                break;
            }
        }
        return ans;
    }
}
