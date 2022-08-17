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
      console.log("Есть вызов");
      func.apply(this, ...args);
      flag = true;
    }
    console.log(flag);
    // clearTimeout(timer); Не совсем понимаю почему мы делаем очистку тайм-аута. Вызов не произойдёт, пока не пройдёт N-е время.
    timer = setTimeout(() => (flag = false), delay);
  };
}

function debounceDecorator2(func, delay) {
  let flag = false;
  callCount = 0;
  function wrapper(...args) {
    if (flag) {
      count++;
      console.log(callCount);
      return;
    }

    console.log(callCount);
    flag = true;

    wrapper.count.push(callCount);
    callCount = 0;

    setTimeout(() => (flag = false), delay);
  }
  wrapper.count = [];
  return wrapper;
}
