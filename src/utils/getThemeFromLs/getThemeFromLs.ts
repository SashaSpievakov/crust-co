export const getThemeFromLs = (): boolean => {
  const data = localStorage.getItem('isLight');
  const isLight = data ? Boolean(JSON.parse(data)) : true;

  return isLight;
};
