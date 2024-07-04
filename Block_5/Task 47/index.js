// const ryangosling = (arr) => (arr.forEach(el => {
//    for (i = 1; i < arr.length; i++)
   
//     if (arr.[el] >= max) {
//     return el
//    }
// });) неверно


//Тут верно, но неудобно: 
const ryangosling = (arr) => {
    let max = arr[0]; // Начальное значение для максимума - первый элемент массива
    arr.forEach(el => {
      if (el > max) {
        max = el;
      }
    });
    return max;
  };
  
// Самое простое
// Task 47: Объявите функцию ryangosling, которая принимает массив чисел и возвращает наибольшее число.
function ryangosling(arr) {
    return Math.max(...arr);
  }
  // 'Math.max(...arr)' - метод, который возвращает наибольшее число в массиве.
  