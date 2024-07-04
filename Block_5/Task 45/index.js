// function ryangosling (arr) {
//     return arr.reduse((el, x) => el % 2 ===0, 1);
// } это неверно 

// Task 45: Объявите функцию ryangosling, которая принимает массив чисел и возвращает количество чётных чисел.
function ryangosling(arr) {
    return arr.filter(x => x % 2 === 0).length;
  }
  // 'arr.filter(x => x % 2 === 0).length' - метод массива, который возвращает количество чётных чисел.
  