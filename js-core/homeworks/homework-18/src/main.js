/* EASY
Алгоритмы !
TASK 0
Вам дано предложение, верните массив из слов,
которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
solution(["This is a sample string"]) expected ["This" "sample" "string"]
solution(["Some another sample"]) expected ["another" "sample"]
solution(["Do, do, do, do... do it!"]) expected []


*/
function solution(arr){
  let min = 0;
  let max = 0;
  let average = 0;

  let worldArr = arr.reduce((newElem,elem) => {
    return newElem = elem.replace(/,/g, "").replace(/\./g, "").replace(/!/g, "").split(" ")
  },[])
  
  worldArr.map(elem => {
    if(min ==0 && max ==0){
      min = elem.length
      max = elem.length
    }
    if(min > elem.length){
      min = elem.length
    }
    if(max < elem.length){
      max = elem.length
    }
  })
  average = (min+max)/2
  return  worldArr.reduce((newElem,elem) => {
    if(elem.length > average){
      newElem.push(elem)
    }
    return newElem
  },[]);

}

console.log(solution(["Do, do, do, do... do it!"]))
console.log(solution(["Some another sample"]))
console.log(solution(["This is a sample string"]))
/*
Подготовка к занятию в пятницу.
Windows:
  Установите все node.js скачать отсюда -> https://nodejs.org/en/
  Скачайте последнюю 10.x.x версию
  Для проверки установки в консоле введите "node -v" (без кавычек) отобразит версию node.js
Linux:
 sudo apt install npm // установить менеджер пакетов npm
 npm i -g n // установить пакет для установки node.js
 sudo n latest // установить последнюю версию node.js
*/


/* TASK 1
Сделайте таблицу 5x5
При клике на элемент, изменяйте цвет у элемента на красный.
Но цвет у элемента должен изменяться пропорционально в другой половине квадрата
Пример 3х3:
[]|[]|[]
[]|[]|[]
[]|[]|[]
кликаем сюда -> []|[]|[]
                []|[]|[]
                []|[]|[x] <- загорается тут
                []|[]|[]
кликаем сюда -> []|[]|[x] <- загорается тут
                []|[]|[x]
*/

let table = document.querySelector("table")
let maxRow = 5;
let maxColumn = 5;

table.addEventListener("click", function(event){
  let row = event.target.id.split("_")[0]
  let column = event.target.id.split("_")[1]

  let idRow = maxRow - row + 1
  let idColumn = maxColumn - column + 1

  document.getElementById(idRow+"_"+idColumn).style.backgroundColor = "red"

})

// @SUPER-FrontEnd
/*
У вас есть 3 блока смотри events.html
при mousedown и движении мышки нужно сделать
ресайз одного блока.
Подсказка - событие необходимо повесить на доп. элемент .resize
*/

