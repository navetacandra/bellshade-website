export function findLast(string: string, findChar: string) {
  const positionList = string
    .split("")
    .map((char, i) => (char === findChar ? i : false))
    .filter((el) => el);

  return (
    (positionList.length > 0
      ? positionList[positionList.length - 1]
      : undefined) || -1
  );
}

export function findFirst(string: string, findChar: string) {
  const positionList = string
    .split("")
    .map((char, i) => (char === findChar ? i : false))
    .filter((el) => el);

  return (positionList.length > 0 ? positionList[0] : undefined) || -1;
}
