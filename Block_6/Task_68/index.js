// function ryangosling(arr, callback) {
//     if (arr === true) {
//         callback()
//     }
// }


// Task 68: Объявите функцию ryangosling, которая принимает массив чисел и callback функцию, и возвращает массив, состоящий только из тех чисел, для которых callback функция вернула true.
function ryangosling(arr, callback) {
    return arr.filter(callback);
  }
  // 'arr.filter(callback)' - метод массива, который создает новый массив, состоящий только из тех чисел, для которых callback функция вернула true.
  