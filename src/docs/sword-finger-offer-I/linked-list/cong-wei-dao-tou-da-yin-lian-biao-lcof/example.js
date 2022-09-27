function reversePrint(head) {
  let current=head;
  const list=[];
  while(current){
    list.unshift(current.val);
    current=current.next;
  };
  return list;
};
