// Get value from a nested
// const obj = { v1: { v2: { v3: 'Value' } } }
// getNestedValueFromObject(obj, 'v1.v2.v3') -> 'Value'

export const getNestedValueFromObject = (obj, target) => {
  if (!target || !target.split) return null;
  target = target.split(".");
  let data = obj[target[0]];
  for (let i = 1; i < target.length; i++) {
    try {
      data = data[target[i]];
    } catch (error) {
      return null;
    }
  }
  return data;
};
