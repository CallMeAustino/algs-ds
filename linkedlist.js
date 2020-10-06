/*linked list implementation*/
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    // Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        if(!this.head){
            this.head = node;
        } else {
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    }
    // Insert at index
    insertAt(data, index) {
        if (index > 0 && index > this.size){
            return;
        } 
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const node = new Node(data);
        let current, previous;
        let current = this.head;
        let counter = 0;
        while(current.next && counter !== index){
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;

        this.size++;
        
    }
    // Delete at Index

    // Clear list

    // Print data
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}