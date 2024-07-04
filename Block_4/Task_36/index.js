// Мое решение, но не с тем методом
function ryangosling (arr) {
    return arr.map(х => х % 2 === 0);
}

// Task 36: Объявите функцию ryangosling, которая принимает массив и возвращает массив только с чётными значениями.
function ryangosling(arr) {
    return arr.filter(x => x % 2 === 0);
  }

  //стрелочный вариант
  const ryangosling = (arr) => arr.filter(x => x % 2 === 0); 