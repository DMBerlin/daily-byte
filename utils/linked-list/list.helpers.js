
function isTwoListsEqual (listOne, listTwo) {
  while (listOne && listTwo) {
    if (listOne.data !== listTwo.data)
      return false;
    listOne = listOne.next;
    listTwo = listTwo.next;
  }
  return true;
}

module.exports = isTwoListsEqual;