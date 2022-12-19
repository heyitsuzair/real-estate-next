export const capitalizeFirstLetter = (text: any) => {
  if (typeof text !== "undefined") {
    const result = text.charAt(0).toUpperCase() + text.slice(1);
    return result;
  }
};
