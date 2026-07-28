class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const s = new Set(nums);
        let max=0;
        if(nums.length==0) return 0;
       for(const curr of nums){
        if(!s.has(curr-1)){
            let count=1;
            let currNum = curr;
            while(s.has(currNum+1)){
                currNum+=1;
                count+=1;
            }
            max = Math.max(max,count)
        }
       }
        return max
    }
}
