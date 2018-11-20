'use strict';

class BinaryTree {
  constructor(root=null) {
    this.root = root;
  }
  
  preOrder(node = this.root){
    let preOrderArray = [];
    logPreOrder(node);
    console.log(preOrderArray);

    function logPreOrder(node) {
      if(!node) return;
      preOrderArray.push(node.value);
      logPreOrder(node.left);
      logPreOrder(node.right);
    }

    return preOrderArray;
  }
  
  inOrder(node = this.root) {
    let inOrderArray = [];
    logInOrder(node);
    console.log(inOrderArray);

    function logInOrder(node) {
      if(!node) return;
      logInOrder(node.left);
      inOrderArray.push(node.value);
      logInOrder(node.right);
    }

    return inOrderArray;
  }
  
  postOrder(node = this.root) {
    let postOrderArray = [];
    logPostOrder(node);
    console.log(postOrderArray);

    function logPostOrder(node) {
      if(!node) return;
      logPostOrder(node.left);
      logPostOrder(node.right);
      postOrderArray.push(node.value);
    }

    return postOrderArray;
  }

  findMax() {
    let values = this.preOrder();
    let max = values[0];
    for(let i = 0; i<values.length; i++) {
      if(values[i] > max) max = values[i];
    }
    console.log(max);
    return max;
  }

}

module.exports = BinaryTree;