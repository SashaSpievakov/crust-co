export const modifySearchParamsName = (param: string) => {
  const trimmedParam = param.trim();

  if (!trimmedParam) return '';

  if (trimmedParam === 'A to Z') {
    return 'name,asc';
  }

  return `${trimmedParam},desc`;
};
