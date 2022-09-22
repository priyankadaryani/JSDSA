/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    
    let i = 0; //start of the sliding window
    let chars = {};
    let len = 0;
    let maxlen = 0;
    for(let j = 0; j<s.length; j++){
        if(!(s[j] in chars)){
           chars[s[j]] = 0;
           }
        chars[s[j]] += 1;
        while(Object.keys(chars).length > k && i<s.length){
            chars[s[i]] -= 1;
            if(chars[s[i]]===0)
                delete chars[s[i]];
            i++;
        }
        len = j-i+1;
        if(len>maxlen)
            maxlen = len;
        
    }
    return maxlen;
    
};
