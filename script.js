const createNode = function createNode(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
};

const createLinkedList = function createLinkedList() {
  let head = null;

  const append = function append(value) {
    if (head === null) {
      head = createNode(value);
    } else {
      let currentNode = head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = createNode(value);
    }
  };

  const prepend = function prepend(value) {
    const newhead = createNode(value, head);
    head = newhead;
  };

  const size = function size() {
    if (head === null) return 0;
    else {
      let count = 1;
      let currentNode = head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        count++;
      }
      return count;
    }
  };

  const getHead = function getHead() {
    return head;
  };

  const getTail = function getTail() {
    if (head === null) return head;
    else {
      let currentNode = head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  };

  const at = function at(index) {
    if (head !== null && index < size() && !(index < 0)) {
      let currentNode = head;
      while (index > 0) {
        currentNode = currentNode.nextNode;
        index--;
      }
      return currentNode.value;
    }
  };

  const pop = function pop() {
    if (head !== null) {
      if (head.nextNode === null) head = null;
      else {
        let previousNode;
        let currentNode = head;
        while (currentNode.nextNode !== null) {
          previousNode = currentNode;
          currentNode = currentNode.nextNode;
        }
        previousNode.nextNode = null;
      }
    }
  };

  const contains = function contains(value) {
    if (head !== null) {
      let currentNode = head;
      while (currentNode !== null) {
        if (currentNode.value == value) return true;
        currentNode = currentNode.nextNode;
      }
    }
    return false;
  };

  const find = function find(value) {
    if (head !== null) {
      let count = 0;
      let currentNode = head;
      while (currentNode !== null) {
        if (currentNode.value == value) return count;
        currentNode = currentNode.nextNode;
        count++;
      }
    }
    return null;
  };

  const toString = function toString() {
    if (head === null) return "null";
    else {
      let currentNode = head;
      let string = currentNode.value + " -> ";
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        string = string + currentNode.value + " -> ";
      }
      return string + "null";
    }
  };

  const insertAt = function insertAt(value, index) {
    if (index < size() && !(index < 0)) {
      if (index === 0) prepend(value);
      else {
        let previous = head;
        let next = head.nextNode;
        let count = 1;
        while (count !== index) {
          previous = next;
          next = next.nextNode;
          count++;
        }
        previous.nextNode = createNode(value, next);
      }
    }
  };

  const removeAt = function removeAt(index) {
    if (index < size() && !(index < 0)) {
      if (index === 0) head = head.nextNode;
      else {
        let previous = head;
        let next = head.nextNode;
        let count = 1;
        while (count !== index) {
          previous = next;
          next = next.nextNode;
          count++;
        }
        previous.nextNode = next.nextNode;
      }
    }
  };

  return {
    append,
    prepend,
    toString,
    size,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
  };
};

//tests

const list = createLinkedList();
list.prepend("banana");
list.append("carrot");
list.prepend("apple");
list.append("durian");

const toStringCheck =
  list.toString() == "apple -> banana -> carrot -> durian -> null";
const sizeCheck = list.size() == 4;
const headCheck = list.getHead().value == "apple";
const tailCheck = list.getTail().value == "durian";
const atCheck = list.at(1) == "banana" && list.at(3) == "durian";
const containsCheck = list.contains("banana") && !list.contains("lemon");
const findCheck = list.find("carrot") == 2 && list.find("lemon") == null;

list.pop();
const popCheck1 = list.toString() == "apple -> banana -> carrot -> null";
list.pop();
const popCheck2 = list.toString() == "apple -> banana -> null";
const popCheck = popCheck1 && popCheck2;

list.append("carrot");
list.append("durian");
list.insertAt("one", 1);
list.insertAt("three", 3);

const insertCheck =
  list.toString() ==
  "apple -> one -> banana -> three -> carrot -> durian -> null";

list.removeAt(3);
list.removeAt(1);

const removeCheck =
  list.toString() == "apple -> banana -> carrot -> durian -> null";

console.log("toString: " + toStringCheck);
console.log("size: " + sizeCheck);
console.log("head: " + headCheck);
console.log("tail: " + tailCheck);
console.log("at: " + atCheck);
console.log("pop: " + popCheck);
console.log("contains: " + containsCheck);
console.log("find: " + findCheck);
console.log("insertAt: " + insertCheck);
console.log("removeAt: " + removeCheck);
