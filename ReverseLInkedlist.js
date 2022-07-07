/*
Reverse a linked list
Given pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing the links between nodes.

Sample Input
list = 1->2->3->4->NULL

Sample Output
list = 4->3->2->1->NULL

*/

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    
   let curr=head;
   let prev=null;
   let next=null;

   while(curr!==null){

      next=curr.next;
      curr.next=prev;
      
      prev=curr;
      curr=next;
   

   }

 return prev;

    
}

