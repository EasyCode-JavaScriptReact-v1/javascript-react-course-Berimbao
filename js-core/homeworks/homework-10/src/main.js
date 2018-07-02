/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;

//создана переменная y и ей присвоенно значение 5

let x = () => y;

//создана переменная x в которую записана функция, возвращающая y

let z = t => {
  let y = 5;
  t();
};
//console.log(y);

//созданна переменная z которая развна функции t которая создает внутреннею переменную y и вызывает сама себя

console.log(z(x)); // что вернет

//undefined - так как t ничего не возвращает

/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать
 * передаваемую строку в html тэг
 *
 *
 * */

let $ = tag => `<${tag}></${tag}>`;

let createBODY = $("body");
let createDIV = $("div");
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

var ezjQueryBase = {
  tags: "",
  add: function(str) {
    ezjQueryBase.tags = ezjQueryBase.tags + `<${str}></${str}>`;
    console.log(ezjQueryBase.tags);
    return this;
  }
};

ezjQueryBase
  .add("body") // <body></body>
  .add("div") // <body></body><div></div>
  .add("h1"); // <body></body><div></div><h1></h1>

/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий
 * тэг помещался внутри предыдущего !
 ---
 * И добавьте объекту ezjQuery метод render, который будет возвращать
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать
 * информацию внутри тэга
 *
 */
var ezjQuery = {
  tags: "",
  add: function(...arg) {
    let tag = [...arg][0];
    let tagContent = [...arg][1];
    let newTagPosition = ezjQuery.tags.indexOf("</");
    let str = tagContent
      ? `<${tag}>${tagContent}</${tag}>`
      : `<${tag}></${tag}>`;

    if (newTagPosition != -1) {
      ezjQuery.tags =
        ezjQuery.tags.slice(0, newTagPosition) +
        str +
        ezjQuery.tags.slice(newTagPosition);
    } else {
      ezjQuery.tags = str;
    }
    return this;
  },
  render: function() {
    let result = ezjQuery.tags;
    ezjQuery.tags = "";
    return result;
  }
};
// example
var helloList = ezjQuery
  .add("body") // <body></body>
  .add("div") // <body><div></div></body>
  .add("ul") // <body><div><ul></ul></div></body>
  .add("li", "Hello") //<body><div><ul><li>Hello</li></ul></div></body>
  .render();

console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
//  Обратите внимание, что после вызова render создание строки началось сначала

var bodyDiv = ezjQuery
  .add("body") //<body></body>
  .add("div") //<body><div></div></body>
  .render();
console.log(bodyDiv); //<body><div></div></body>

// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)

// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 * */
