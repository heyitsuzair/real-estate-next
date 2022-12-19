export const capitalizeFirstLetter = (text: string | string[] | undefined) => {
  if (typeof text !== "undefined") {
    const result = text.charAt(0).toUpperCase() + text.slice(1);
    return result;
  }
};
