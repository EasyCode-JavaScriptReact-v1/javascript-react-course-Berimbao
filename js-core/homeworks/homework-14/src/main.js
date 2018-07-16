/*
TASK 0. Найдите числа которые повторяются нечетное количество раз
в массиве
  solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
  solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
  solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
  solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
  solution([2, 2, 44, 44]) => []
*/

function dublicateNubers(arr) {
  let resulrArr = [];
  let obj = {};

  arr.forEach(elem => {
    if (!obj[elem]) {
      obj[elem] = 1;
    } else {
      obj[elem] = obj[elem] + 1;
    }
  });

  Object.keys(obj).forEach(elem => {
    if (obj[elem] % 2 != 0) {
      resulrArr.push(elem);
    }
  });

  console.log(resulrArr);
}

dublicateNubers([12, 23, 34, 12, 12, 23, 12, 45]);
dublicateNubers([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100]);
dublicateNubers([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]);
dublicateNubers([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]);
dublicateNubers([2, 2, 44, 44]);

let solution1;

const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

function strParser(str, oldValue, newValue) {
  let re = new RegExp(oldValue, "g", "m", "i");
  return str.replace(re, newValue);
}

console.log(strParser(someWebpackModule, "%%HOMEDIR%%", "./JavaScript-Basic"));
console.log(strParser(someWebpackModule, "%%APP_DIR%%", "fixtures/src"));
console.log(strParser(someWebpackModule, "%%APPNAME%%", "app.js"));

/* TASK - 1
Распарсите строку и замените
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 Сделайте несколько вызовов данной функции
 *
 * */

/*
 TASK - 2
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)
*/

/*
TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM
  Это будет тест, который мы будем разрабатывать в следующих заданиях.
  Сейчас вам нужно только динамически создать html,
  методы должны храниться в одном объекте.
  Изначально на странице должен быть только <body>,
  вызывая методы объекта нужно создать dom-элементы
*/

let variantsArr = [
  "Вариант ответа №1",
  "Вариант ответа №2",
  "Вариант ответа №3"
];
let questionsArr = ["Вопрос 1", "Вопрос 2", "Вопрос 3"];

function render(questionsArr, variantsArr) {
  questionsArr.forEach(val => {
    let div = document.createElement("div");
    let ul = document.createElement("ul");
    ul.textContent = val;
    variantsArr.forEach(val => {
      let li = document.createElement("li");
      let checkbox = document.createElement("input");
      let span = document.createElement('span');
      checkbox.setAttribute("type", "checkbox");
      span.textContent = val;
      li.appendChild(checkbox);
      li.appendChild(span);
      ul.appendChild(li);
    });
    div.setAttribute("class", "test__question");
    div.appendChild(ul);
    document.body.appendChild(div);
  });

  let buttonDiv = document.createElement("div");
  let button = document.createElement("button");
  buttonDiv.setAttribute("class", "center");
  button.textContent = "Проверить мои результаты";
  buttonDiv.appendChild(button);
  document.body.appendChild(buttonDiv);
}

render(questionsArr, variantsArr);
// app.render();
