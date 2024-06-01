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

  const toString = function toString() {
    if (head === null) return null;
    else {
      let currentNode = head;
      let string  = currentNode.value + " -> ";
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        string = string + currentNode.value + " -> ";
      }
      return string + "null";
    }
  };

  return { append, toString };
};
