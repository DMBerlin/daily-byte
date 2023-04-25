const Node = require('./node.class');

class LinkedList {
    constructor () {
        this.head = null;
    }

    add (data) {
        this.head = new Node(data, this.head);
    }

    getSize () {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst () {
        return this.head;
    }

    getLast () {
        let node = this.head;
        while (node.next && node.next.next) {
            node = node.next;
        }
        return node;
    }

    clear () {
        this.head = null;
    }

    shift () {
        if (!this.head) return;
        this.head = this.head.next;
    }

    pop () {
        if (!this.head) return;
        let node = this.head;
        while (node) {
            if (node.next && !node.next.next) {
                node.next = null;
                return;
            }
            node = node.next;
        }
    }

    push (data) {
        let node = this.getLast(); 
        if (node) {
            node.next = new Node(data, node.next);
        } else {
            this.head = new Node(data, this.head);
        }
    }

    getAt (pos) {
        if (!this.head) return null;
        let node = this.head;
        let index = 0;
        while (node) {
            if (index === pos) return node;
            node = node.next;
            index++;
        }
    }

    removeAt (pos) {
        if (!this.head) return null;
        
        if (pos === 0) {
            this.head = this.head.next;
            return;
        }

        let index = 0;
        let node = this.head;
        let prevNode = this.head;
        while (node) {
            if (index === pos) {
                prevNode.next = node.next;
                return;
            } else {
                prevNode = node;
                node = node.next;
                index++;
            }
        }
    }

    insertAt (data, pos) {
        if (!this.head) return null;
        
        if (pos === 0) {
            return this.head;
        }
        
        let index = 0;
        let node = this.head;
        let prevNode = this.head;
        while (node) {
            if (index === pos) {
                prevNode.next = new Node(data, node);
                return;
            } else {
                prevNode = node;
                node = node.next;
                index++;
            }
        }
    }

    printAll () {
        if (!this.head) return;
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }

    getNodeByValue (head, value) {
        if (!head) return null;
        while (head) {
            if (head.data === value) return head;
            head = head.next;
        }
        return null;
    }

    buildFromArray (values) {
        values.forEach(value => this.add(value));
    }

    encycleList (head) {
        let dummy = head;
        let node = head;
        while (node) {
            if (!node.next) {
                node['next'] = dummy;
                return this;
            }
            node = node.next;
        }
        return this;
    }

    encycleListAt (head, value) {
        let dummy = head.getNodeByValue(head.head ,value);
        let node = head.head;
        while (node) {
            if (!node.next) {
                node['next'] = dummy;
                return this;
            }
            node = node.next;
        }
        return this;
    }

    getHead () {
        return this.head;
    }

    static createFromArray (arr, options) {
        let head = new LinkedList();
        head.buildFromArray(arr, options);
        if (options && options.circular && options.encycleListAt === undefined) {
            return head.encycleList(head);
        } else if (options && typeof options.encycleListAt === 'number') {
            return head.encycleListAt(head, options.encycleListAt);
        }
        return head;
    }
}

module.exports = LinkedList;