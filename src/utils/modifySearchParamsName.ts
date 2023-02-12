const modifySearchParamsName = (param: string) => {
  if (param === 'A to Z') {
    return 'name&order=asc';
  }
  return `${param}&order=desc`;
};

export default modifySearchParamsName;
