export const zeroPad = (number: number, places: number) => {
  return String(number).padStart(places, "0");
};
