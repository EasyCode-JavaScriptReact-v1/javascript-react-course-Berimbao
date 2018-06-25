/*
 *
 * TASK 1
 *
 * Напишите функцию которая будет вызываться трижды и складывать
 * все передаваемые ей числа
 *
 * */

function add(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    };
  };
}

// const addVar = add(1);
// console.log(addVar(2))
// console.log(addVar(3))
console.log(add(1)(2)(3)); // 6
console.log(add(10)(5)(15)); // 30

/*
 *
 * TASK 2
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта
 * это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 *
 * */

function patternModule() {
  let i = 0;
  let obj = {
    method: function() {
      return ++i;
    },
    zeroMethod: function() {
      return (i = 0);
    }
  };
  return obj;
}

// patternModule

let test = patternModule(); // 0
console.log(test.method()); //1
console.log(test.method()); //2
console.log(test.method()); //3
console.log(test.zeroMethod()); //0
console.log(test.method()); //1

/*
 * TASK 1
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода ( функция )
 *
 *  При вызове метода отобразите сумму передаваемых
 *  параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */

let jun = {};

function methodCounter(obj, name, num, fn) {
  let counter = num;

  obj[name] = function(a, b, c, d) {
    if (counter == 0) {
      return "ERROR ! add more methods";
    }
    counter--;
    let num1 = a || 0;
    let num2 = b || 0;
    let num3 = c || 0;
    let num4 = d || 0;
    return fn(num1, num2, num3, num4);
  };
}

methodCounter(jun, "logger", 2, function(a, b, c, d) {
  return a + b + c + d;
});

console.log(jun.logger(1, 2, 3, 4)); // 2, 10
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.logger(5, 5)); // ERROR ! add more methods

//jun.addCounter(10, methodName);

// @SUPER,

/*
 * Добавьте функции methodCounter, возможность увеличивать счетчик
 * на заданное число
 *
 * */
