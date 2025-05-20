export default function fluent(object) {
  return new Proxy(object, {
    get(target, property) {
      return (...args) => {
        target[property](...args);

        return object;
      };
    },
  });
}
