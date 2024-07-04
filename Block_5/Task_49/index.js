// Task 49: Объявите функцию ryangosling, которая принимает массив строк и возвращает самую длинную строку.
function ryangoslin(arr) {
return arr.reduce((a, b) => (a.length > b.length ? a : b));
}
// 'arr.reduce((a, b) => a.length > b.length ? a : b)' - метод массива, который возвращает самую длинную строку.

function ryangosling(arr) {
  const test = arr.reduce((a, b) => {
    if (a.length > b.length) {
      return a;
    } else {
      return b;
    }
  });
  console.log(test);
  return test;
}

ryangosling(["Мама", "мыла", "член коровы"]);
