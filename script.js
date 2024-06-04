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
const atCheck = list.at(1).value == "banana" && list.at(3).value == "durian";
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
