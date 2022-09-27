// function Node(val, next, random) {
//   this.val = val;
//   this.next = next;
//   this.random = random;
// }

function copyRandomList(head) {
  if (!head) return null;
  let cur = head;
  let newHead, newCur;
  const map = new Map();
  while (cur) {
    const newNode = map.get(cur) || new Node(cur.val);
    map.set(cur, newNode);

    // get random node
    if (cur.random) {
      newNode.random = map.get(cur.random) || new Node(cur.random.val);
      map.set(cur.random, newNode.random);
    } else {
      newNode.random = null;
    }

    // get next node
    if (cur.next) {
      newNode.next = map.get(cur.next) || new Node(cur.next.val);
      map.set(cur.next, newNode.next);
    } else {
      newNode.next = null;
    }

    // link newNode to newCur
    if (!newCur) {
      newCur = newNode;
      newHead = newCur;
    } else {
      newCur.next = newNode;
    }

    newCur = newNode;
    cur = cur.next;
  }
  return newHead;
}
