// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 * Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
  skills: ["JavaScript", "linux", "html", "OOP", "Node.js"],
  requirements: ["Node.js", "JavaScript", "OOP"],
  goodDev: goodDev
};
let developer2 = {
  experience: [
    { technology: "java" },
    { technology: "c++" },
    { technology: "aws" },
    { technology: "docker" }
  ],
  requirements: ["java", "json", "c++", "JavaScript"],
  goodDev: goodDev
};

function goodDev() {
  let skillsArray = [];
  let needSkilsArray = [...this.requirements];
  console.log("...");
  if (this.skills) {
    skillsArray = [...this.skills];
  }
  if (this.experience) {
    skillsArray = this.experience.map(function(elem) {
      return (elem = elem.technology);
    });
  }

  return needSkilsArray.forEach(function(value) {
    if (skillsArray.indexOf(value) != -1) {
      console.log(`required: ${value}... success`);
    } else {
      console.log(`required: ${value}... fail`);
    }
  });
}

developer1.goodDev();
developer2.goodDev();

// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success

/*
 *
 * TASK 2
 *
 *
 * Напишите функцию принимает 1 аргумент сортирует объект по
 * переданному значению (например age или name)
 *
 * При вызове функции используйте this
 *
 * */

let myObject = {
  database: [
    { age: 100, name: "b" },
    { age: 15, name: "c" },
    { age: 25, name: "a" }
  ]
};

myObject.myFilter = function(param) {
  let obj = { ...this, database: [...this.database] };
  return obj.database.sort(function(a, b) {
    return a[param] > b[param];
  });
};

// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}
console.log(myObject.myFilter("age"));

// {age:25, name:a}, {age:100, name: b} ...
console.log(myObject.myFilter("name"));

/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 *
*/
/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 // concat
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */
let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [
  "a",
  0,
  0,
  "b",
  null,
  "c",
  "d",
  0,
  1,
  false,
  0,
  1,
  0,
  3,
  [],
  0,
  1,
  9,
  0,
  0,
  {},
  0,
  0,
  9
];

function moveZeroToEnd(arr) {
  let zeroArray = [];
  let noZeroArray = [];

  arr.forEach(
    elem => (elem === 0 ? zeroArray.push(elem) : noZeroArray.push(elem))
  );

  return noZeroArray.concat(zeroArray);
}
console.log(moveZeroToEnd(arr1));
console.log(moveZeroToEnd(arr2));

/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

function capMe(arr) {
  return arr.map(function(elem) {
    return elem
      .slice(0, 1)
      .toUpperCase()
      .concat(elem.toLowerCase().slice(1));
  });
}

console.log(capMe(["jo", "nelson", "jurie"]));
console.log(capMe(["KARLY", "DANIEL", "KELSEY"]));

////// @ TODO -- LVL Strong Junior

/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов,
 *  должно давать различный результат
 *
 * */

let junior = {};

// fn.length == arguments.length

function addMethod(object, name, fn) {
  object[name] = function() {
    if (fn.length == arguments.length) {
      return object[name];
    }
  };
  return fn();
}

addMethod(junior, "ok", function() {
  console.log("zero arguments");
});
addMethod(junior, "ok", function(one) {
  console.log("one arguments");
});
addMethod(junior, "ok", function(one, two) {
  console.log("two arguments");
});
addMethod(junior, "ok", function(one, two, three) {
  console.log("three arguments");
});

junior.ok(1, 2, 3); // 'three arguments'
junior.ok(1, 2); // 'two arguments'
junior.ok(1); //'one arguments'
junior.ok(); //'zero arguments'
