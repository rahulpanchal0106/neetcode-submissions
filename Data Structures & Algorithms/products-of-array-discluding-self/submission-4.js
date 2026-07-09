class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pre = new Array(nums.length).fill(0);
        const pos = new Array(nums.length).fill(0);
        let curr=1;
        for(let i=0; i<nums.length; i++){
            pre[i]=curr;
            curr*=nums[i];
        }

        curr=1;
        for(let i=nums.length-1; i>=0; i--){
            pos[i]=curr*pre[i] ;
            curr*=nums[i];

        }
        return pos;
    }
}
