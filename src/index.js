const createDoIn = (handler) => {
  const doIn = (obj, path, value) => {
    if (!path.length) {
      const res = handler(obj, value);
      return res;
    }
    const [key, ...restPath] = path;
    if (Array.isArray(obj)) {
      return obj.map((item, index) => {
        if (typeof key === 'function') {
          if (key(item, index)) {
            return doIn(item, restPath, value);
          }
          return item;
        }

        if (index === key) {
          return doIn(item, restPath, value);
        }
        return item;
      });
    }
    const objValue = obj ? obj[key] : {};
    return Object.assign({}, obj, {
      [key]: doIn(objValue, restPath, value)
    });
  };
  return doIn;
};

const filterIn = createDoIn((obj, fn) => obj.filter(fn));
const mergeIn = createDoIn((obj, value) => Object.assign({}, obj, value));
const pushIn = createDoIn((obj, value) => [...obj, value]);
const setIn = createDoIn((obj, value) => value);
const sliceIn = createDoIn((obj, value) => [...obj.slice(0, value), ...obj.slice(value + 1)]);
const toggleIn = createDoIn((obj) => !obj);
const updateInWith = createDoIn((obj, fn) => fn(obj));

module.exports = {
  filterIn,
  mergeIn,
  pushIn,
  setIn,
  sliceIn,
  toggleIn,
  updateInWith,
};

