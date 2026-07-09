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
            pos[i]=curr;
            curr*=nums[i];
        }
        const ans = new Array(nums.length).fill(0)
        for(let i=0; i<nums.length; i++){
            ans[i]=pre[i]*pos[i];
        }
        return ans;
    }
}
