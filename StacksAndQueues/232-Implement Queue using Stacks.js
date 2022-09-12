// so we don't have a queue, we just have this stack that is to be treated as a queue

var MyQueue = function() {
    this.qstack = []; //empty array to implement stack
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    //take the current stack and reverse it into another stack
    //add the new element
    //reverse it back into the queue stack
    let newStack = [];
    while(this.qstack.length>0){
        newStack.push(this.qstack.pop());
    }
    newStack.push(x);
    while(newStack.length>0){
        this.qstack.push(newStack.pop());
    }
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.qstack.length > 0 ? this.qstack.pop() : undefined ;
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.qstack.length > 0 ? this.qstack[this.qstack.length-1] : undefined ;
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.qstack.length === 0 ;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
