'use strict';

class Node{
  constructor(value, left=null,right=null, result){
    this.value = value;
    this.result = result;
    this.left = left;
    this.right = right;
  }
}

module.exports = Node;