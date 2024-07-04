// Task 50: Объявите функцию ryangosling, которая принимает массив строк и возвращает самую короткую строку.
function ryangosling(arr) {
    return arr.reduce((a, b) => a.length < b.length ? a : b);
  }
  // 'arr.reduce((a, b) => a.length < b.length ? a : b)' - метод массива, который возвращает самую короткую строку.
  

  function ryangosling(arr) {
    return arr.reduce((a, b) => {
      if (a.length < b.length) {
        return a;
      } else {
        return b;
      }
    });
  }
  
  //Это хреново, нужно повторять