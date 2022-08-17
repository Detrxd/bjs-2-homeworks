function cachingDecoratorNew(func) {
  let cache = {};
  return function (...args) {
    hash = args.join(",");

    if (hash in cache) {
      return "Из кэша: " + cache[hash];
    } else if (Object.keys(cache).length === 5) {
      delete cache[Object.keys(cache)[0]];
      cache[hash] = func.apply(this, args);
      return "Вычисляем: " + cache[hash];
    } else {
      cache[hash] = func.apply(this, args);
      return "Вычисляем: " + cache[hash];
    }
  };
}

function debounceDecoratorNew(func, delay) {
  let timer;
  let flag = false;

  return function (...args) {
    if (!flag) {
      func.apply(this, ...args);
      flag = true;
    }
    clearTimeout(timer);
    timer = setTimeout(() => (flag = false), delay);
  };
}

function debounceDecorator2(func, delay) {
  let flag = false;
  let timer;
  function wrapper(...args) {
    if (!flag) {
      wrapper.count.push(args);
      flag = true;
    }

    clearTimeout(timer);
    timer = setTimeout(() => (flag = false), delay);
    return func(...args);
  }
  wrapper.count = [];
  console.log(wrapper.count);
  return wrapper;
}
