/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    while(head!=null){
        if(head.val==val){
            head = head.next;
        }
        else
            break; 
    }
    
    let curr = (head==null? head : head.next);
    let prev = head;
    
    while(curr!=null){
        if(curr.val == val){
            prev.next=curr.next;
            curr = curr.next;
        }
        else{
            curr = curr.next;
            prev = prev.next;
        }

    }
    
    return head;
};
