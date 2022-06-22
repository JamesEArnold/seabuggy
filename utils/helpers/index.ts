export const calculateAverage = (arr: number[]) => {
  const sum = arr.reduce((a, v) => a + v);
  return Math.round(sum / arr.length);
};
