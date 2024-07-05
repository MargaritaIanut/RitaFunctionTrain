// Task 70: Объявите функцию ryangosling, которая принимает объект и callback функцию, и возвращает новый объект, состоящий только из тех ключей и значений, для которых callback функция вернула true.
function ryangosling(obj, callback) {
    const result = {};
    for (let key in obj) {
      if (callback(key, obj[key])) {
        result[key] = obj[key];
      }
    }
    return result;
  }
  // 'for...in' - цикл, который перебирает ключи объекта.
  // 'callback(key, obj[key])' - вызов callback функции для каждого ключа и значения объекта.
  
  не решила!!!