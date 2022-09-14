
//recursive solution - Runtime: 179 ms, faster than 9.13% of JavaScript online submissions
var fib = function(n) {
    if(n < 2){
        return n;
    }
    
    return fib(n-1) + fib(n-2);
};

//iterative solution - Runtime: 99 ms, faster than 52.33% of JavaScript online submissions
var fib = function(n) {
    if(n === 0){
        return 0;
    }
    
    if(n === 1){
        return 1;
    }
    
    let a = 0;
    let b = 1;
    
    for(let i = 2; i<=n; i++){
        let temp = a+b;
        a = b;
        b = temp;
    }
    
    return b;
};


//array solution - Runtime: 72 ms, faster than 86.12% of JavaScript online submissions
var fib = function(n) {
    let arr = [0, 1]
    let i = 2;
    while(i<=n){
        arr.push(arr[i-1]+arr[i-2]);
        i++;
    }
    return arr[n];
};
