// Helper method to avoid installing LoDash
// Takes an array, and uses the specified "key" prop to convert it into a Hash object using the "key" prop as the key
export const arrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

// omit multiple keys
// const profile = { name: 'Maria', gender: 'Female', age: 30 }
// const result = omit(['name', 'gender'], profile)
export const omitMultiple = (keys, obj) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// omit 1 property by key
// const profile = { name: "Maria", age: 30 };
// const result = omit("name", profile); -> output: {age: 30}
export const omit = (key, { [key]: _, ...obj }) => obj;