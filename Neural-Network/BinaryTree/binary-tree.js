'use strict';

import Node from '../Node/node.js';

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

  // --------------------------------------------------------------------------
  // Not sure if the code below is needed right now but I'm keeping it in case
  // --------------------------------------------------------------------------
  
  // inOrder(node = this.root) {
  //   let inOrderArray = [];
  //   logInOrder(node);
  //   console.log(inOrderArray);

  //   function logInOrder(node) {
  //     if(!node) return;
  //     logInOrder(node.left);
  //     inOrderArray.push(node.value);
  //     logInOrder(node.right);
  //   }

  //   return inOrderArray;
  // }
  
  // postOrder(node = this.root) {
  //   let postOrderArray = [];
  //   logPostOrder(node);
  //   console.log(postOrderArray);

  //   function logPostOrder(node) {
  //     if(!node) return;
  //     logPostOrder(node.left);
  //     logPostOrder(node.right);
  //     postOrderArray.push(node.value);
  //   }

  //   return postOrderArray;
  // }

  // findMax() {
  //   let values = this.preOrder();
  //   let max = values[0];
  //   for(let i = 0; i<values.length; i++) {
  //     if(values[i] > max) max = values[i];
  //   }
  //   console.log(max);
  //   return max;
  // }

 
  // TODO: I want to make a method that adds a Node to the tree based on the lastMove of the Node
  add(data,result) {
    const node = this.root;
    if(!node) {
      this.root = new Node(data,result);
      return;
    } else {
      function searchTree(node) {
        if(result !== node.result) {
          if(!node.left) {
            node.left = new Node(data, result);
            return;
          } else if(node.left) {
            return searchTree(node.left);
          }
        } else if(result === node.result) {
          if(!node.right) {
            node.right = new Node(data, result);
            return;
          } else if(node.right) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      return searchTree(node);
    }
  }

}

module.exports = BinaryTree;