const sumaNaturales = (
  a: number | undefined = undefined,
  b: number | undefined = undefined
): number | undefined => {
  return a == undefined || b == undefined || a < 0 || b < 0 ? undefined : a + b;
};

export default sumaNaturales;
