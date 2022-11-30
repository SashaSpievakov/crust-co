export default function getTheme() {
  const data = localStorage.getItem("isLight");
  const isLight = data ? JSON.parse(data) : false;

  return isLight;
}
