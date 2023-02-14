const modifySearchParamsName = (param: string) => {
  const trimmedParam = param.trim();

  if (!trimmedParam) return '';

  if (trimmedParam === 'A to Z') {
    return 'name&order=asc';
  }
  return `${trimmedParam}&order=desc`;
};

export default modifySearchParamsName;
