//Task 40: Объявите функцию ryangosling, которая принимает массив чисел и возвращает сумму всех чисел.
function ryangosling(arr) {
    return arr.reduce((sum, x) => sum + x, 0);
  }
  // 'arr.reduce((sum, x) => sum + x, 0)' - метод массива, который вычисляет сумму всех чисел.
  

const ryangosling = (arr) => arr.reduse((sum, x) => sum + x, 0);
