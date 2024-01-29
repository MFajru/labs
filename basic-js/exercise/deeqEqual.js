function deepEqual(obj1, obj2) {
  // check if the value passed in are equal
  // or in case of an object check if it is the exact same in memory
  if (obj1 === obj2) {
    return true;
  }

  // Check if both objects are non-null objects
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if both objects have the same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if each key in obj1 is present in obj2 and their values are deeply equal
  for (const key of keys1) {
    console.log("key: ", key);
    console.log("value: ", obj1[key]);
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

const objA = { a: 1, b: { c: 2, d: [1, 2, 3, 4] }, c: "oke" };
const objB = { a: 1, b: { c: 2, d: [1, 2, 3, 4] } };
// console.log(objA.d[0]);

console.log(deepEqual(objA, objB));
