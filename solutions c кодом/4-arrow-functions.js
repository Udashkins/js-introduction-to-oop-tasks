// BEGIN
export default function each(collection, callback) {
    for (const i of collection) {
      callback.call(i);
    }
  }
// END
