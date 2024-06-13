export default function useUtils() {
  function isHexColor(value: string) {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexRegex.test(value);
  }
  return {
    isHexColor,
  };
}
