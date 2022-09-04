/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let x = 0;
    let y = 1;
    
    while(y<nums.length){
        if(nums[x]==nums[y]){
            for(y=y+1; y<nums.length; y++){
                if(nums[x]!=nums[y]){
                    nums[++x]=nums[y];
                    break;
                }
                else continue;
            }
        }
        else{ 
          x++;
          y++;
        }
   
    }
    
    return x+1;
    
};
