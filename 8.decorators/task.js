function cachingDecoratorNew(func) {
  let cache = {};
  return function (...args) {
    hash = args.join(',');

    if (hash in cache) {
      console.log("Из кэша: " + cache[hash]);
    } else if (Object.keys(cache).length === 5) {
      delete cache[Object.keys(cache)[0]];
      cache[hash] = func.apply(this, args);
      console.log("Вычисляем: " + cache[hash]);
    } else {
      cache[hash] = func.apply(this, args);
      console.log("Вычисляем: " + cache[hash]);
    }
  };
}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}

