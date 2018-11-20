'use strict';

class Node{
  constructor(value, left=null,right=null, lastMove){
    this.value = value;
    this.lastMove = lastMove;
    this.left = left;
    this.right = right;
  }
}

module.exports = Node;