class Stack {
    constructor() {
        this.list = [];
        this.curr = -1;
    }

    top() {
        if (this.curr = -1) {
            return null;
        } else {
            return this.list[this.curr];
        }
    }

    push(item) {
        this.list.push(item);
        this.curr += 1;
    }

    pop() {
        if (this.curr == -1) return null;
        const result = this.list[this.curr];
        this.list = this.list.splice(0, this.list.length - 1);
        this.curr -= 1;
        return result;
    }
}

class Queue {
    constructor() {
        this.list = [];
    }

    enqueue(item) {
        this.list = [item].concat(this.list);
    }

    dequeue() {
        if (this.list.length == 0) return  null;
        const result = this.list[this.list.length - 1];
        this.list = this.list.splice(0, this.list.length - 1);
        return result;
    }
}

class Node {
    constructor(node, value) {
        this.next = node;
        this.value = value;
    }
}

class LinkedList {
    constructor() {
        this.start = null;
    }

    push(item) {
        if (this.start == null) {
            this.start = new Node(null, item);
            return;
        }

        let curr = this.start;
        while (curr.next != null) {
            curr = curr.next;
        }

        curr.next = new Node(null, item);
        return;
    }

    getLast() {
        if (this.start == null) {
            return null;
        }

        let curr = this.start;
        while (curr.next != null) {
            curr = curr.next;
        }
        return curr.value;
    }

    getAll() {
        if (this.start == null) {
            return [];
        }

        const result = [];
        let curr = this.start;
        while (curr.next != null) {
            result.push(curr.value);
            curr = curr.next;
        }
        result.push(curr.value);
        return result;
    }
}

let stack = new Stack();

stack.push(1);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.push(5);
stack.push(1);
console.log(stack.pop());
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());

console.log('-----queue-----')
const queue = new Queue();

queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(7);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(8);
console.log(queue.dequeue());


console.log('-------linkedlist-------');

const list = new LinkedList();
list.push(3);
list.push(4);

console.log(list.getLast());
list.push(5);
console.log(list.getLast());
list.push(6);
console.log(list.getLast());
console.log(list.getAll());