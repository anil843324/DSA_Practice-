// const ListNode = class {
//     constructor(nodeData) {
//         this.val = nodeData;
//         this.next = null;
//     }
// };

// Complete the function below


const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var addTwoNumbers = function (l1, l2) {
    
    let dl1=l1;
    let dl2=l2;
    
    let ansList=new ListNode(0);
    
    let tansList=ansList;
    
    let carry=0;
    while(dl1!==null || dl2!==null || carry===1){
        
        
        let sum=0;
        if(dl1!==null){
            
            sum=sum+dl1.val
            dl1=dl1.next
        }
        
         if(dl2!==null){
            
            sum=sum+dl2.val
            dl2=dl2.next
        }
        
         
         sum=sum+carry
         
        carry=Math.floor(sum/10);
         
        
         
        let dummy=new ListNode(sum%10);
        
        tansList.next=dummy;
        
        
        tansList=tansList.next;
        
        
    }
    
    
   return  ansList.next;

    
    
};

