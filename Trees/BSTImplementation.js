class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    //Code here
    let newNode = new Node(value);
    if(this.root == null){
      this.root = newNode;
    } //keep going till we come across a null object 
    else{
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }  
          currentNode = currentNode.left;
        }
        else{
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value){
    if(this.root==null){
      return false;
    }
    else{
      let currentNode = this.root;
      while(currentNode){ //it is not null
        if(value < currentNode.value){ //go left
          currentNode = currentNode.left;
        }
        else if(value > currentNode.value){ //go right
          currentNode = currentNode.right;
        }
        else if(value == currentNode.value){
          return currentNode;
        }
      }
      return false;
      // same soution as the above lookup method but more wordy: 
      // while(true){
      //   if(currentNode.value == value){
      //     return "found it";
      //   }
      //   else if(currentNode.value > value) { //go left
      //     if(currentNode.left!=null){
      //       currentNode = currentNode.left;
      //     }
      //     else {
      //       return "not found!"; //this is out of reach?
      //     }
      //   }
      //   else { //go right
      //      if(currentNode.right!=null){
      //        currentNode = currentNode.right;
      //      } 
      //     else {
      //       return "not found!";
      //     }
      //   }
      // }
      
    }
    //Code here
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(9));
console.log(tree.lookup(170));
console.log(tree.lookup(8));





//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





