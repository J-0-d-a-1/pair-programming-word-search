const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  let transposedArr = [];
  for (let i = 0; i < letters[0].length; i++) {
    transposedArr.push([]);
  }

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      transposedArr[j][i] = letters[i][j];
    }
  }

  const verticalJoin = transposedArr.map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
