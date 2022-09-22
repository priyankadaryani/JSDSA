// literally the same as longest substring with K distinct characters
// here K = 2

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let i = 0; //start of the sliding window
    let chars = {};
    let len = 0;
    let maxlen = 0;
    let k = 2; //here K is 2
    let s = fruits; //s is fruits
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
