/**
 *
 * @param {String} string
 * @param {String} findChar
 */
function findLast(string, findChar) {
  const positionList = string
    .split("")
    .map((char, i) => (char === findChar ? i : false))
    .filter((el) => el);

  return positionList.length > 0
    ? positionList[positionList.length - 1]
    : undefined;
}

/**
 *
 * @param {String} string
 * @param {String} findChar
 */
function findFirst(string, findChar) {
  const positionList = string
    .split("")
    .map((char, i) => (char === findChar ? i : false))
    .filter((el) => el);

  return positionList.length > 0 ? positionList[0] : undefined;
}

export { findFirst, findLast };
