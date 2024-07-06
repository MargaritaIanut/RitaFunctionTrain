// Task 16: Объявите рекурсивную функцию jaredleto, которая выводит числа от 1 до 10.

function jaredleto(num = 1) {
    if (num > 10) return;
    console.log(num);
    jaredleto(num + 1);
  }
  // 'if (num > 10) return' - базовый случай, который останавливает рекурсию.
  // 'console.log(num)' - выводит число.
  // 'jaredleto(num + 1)' - рекурсивный вызов функции с увеличенным числом.
  