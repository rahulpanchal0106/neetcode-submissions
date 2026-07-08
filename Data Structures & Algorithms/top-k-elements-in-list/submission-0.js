class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            if (!map[nums[i]]) {
                map[nums[i]] = 1;
            } else {
                map[nums[i]]++;
            }
        }
        const arr = Object.keys(map);
        arr.sort((a,b)=>map[b]-map[a]);
        const ans = new Array(k).fill(0)
        for(let i=0; i<k; i++){
            ans[i]=Number(arr[i])
        }

        return ans
    }
}
