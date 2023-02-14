export default function getThemeFromLs() {
  const data = localStorage.getItem('isLight');
  const isLight = data ? JSON.parse(data) : true;

  return isLight;
}
