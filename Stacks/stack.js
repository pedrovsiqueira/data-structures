class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //Check if stack is empty
  isEmpty() {
    console.log(this.count == 0 ? "Stack is empty" : "Stack is not empty");
    return this.count === 0;
  }

  //Add element to top of the stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to position ${this.count}`);
    this.count++;
    return this.count - 1;
  }

  //Remove element from the top of the stack
  pop() {
    if (this.isEmpty()) return;

    let deleteItem = this.items[this.count - 1];
    this.count--;
    this.items.pop();
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  //Check top element in stack
  peek() {
    if (this.isEmpty()) return;

    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  //Check size of stack
  size() {
    console.log(`${this.count} elements in stack`);
    return this.count;
  }

  //print elements in stack
  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }

  //Clear stack
  clear() {
    this.items = [];
    this.count = 0;
    console.log("Stack cleared");
    return this.items;
  }
}

const stack = new Stack();

stack.isEmpty();
stack.push(100);
stack.push(200);
stack.peek();
stack.push(300);
console.log(stack.print());
stack.size();
stack.isEmpty();

stack.pop();
stack.pop();
console.log(stack.print());
stack.peek();

stack.clear();
