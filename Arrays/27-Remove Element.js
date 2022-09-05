/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let x = 0;
    let y = 0;
    
    while(y<nums.length){
        if(nums[y]==val){
            y++;
            
        }
        else{
            nums[x]=nums[y];
            y++;
            x++;
        }
    }
    
    return x;
    
};
