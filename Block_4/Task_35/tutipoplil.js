ryangosling (arr) {
    return arr.map * 2
};

// Task 35: Объявите функцию ryangosling, которая принимает массив и возвращает массив с удвоенными значениями.
function ryangosling(arr) {
    return arr.map(x => x * 2);
  }
  // 'arr.map(x => x * 2)' - метод массива, который создает новый массив с удвоенными значениями.
  
  // Вариант без стреллочной функции: 
  function ryangosling(arr) {
    return arr.map(function(x) {
      return x * 2;
    });
  }
//Самый сокращенный вариант: 

  const ryangosling = (arr) => arr.map(x => x * 2); 