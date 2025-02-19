// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeDuplicates(stack) {
  // your code here
  let temporary = new Stack()
  
  while (!stack.isEmpty()) {
    let element = stack.pop()
    let isUnique = true

    let tempStorage = new Stack()
    while (!temporary.isEmpty()) {
        let tempElement = temporary.pop()
        if (tempElement === element) {
            isUnique = false
        }
        tempStorage.push(tempElement)
    }

    while (!tempStorage.isEmpty()) {
        temporary.push(tempStorage.pop())
    }

    if (isUnique) {
        temporary.push(element)
    }
}


  while(!temporary.isEmpty()) {
    stack.push(temporary.pop())
  }

}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack)
console.log(stack.printStack()) // [2, 5, 1, 3]