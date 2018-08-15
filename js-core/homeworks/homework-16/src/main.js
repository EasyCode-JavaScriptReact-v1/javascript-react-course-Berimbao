/*
0 Алгоритмы
Реализуйте функцию которая будет превращать трехмерный массив
в двухмерный, а если массив двухмерный, тогда в трехмерный массив
// solution([ [1, 'a'], [2, 'b'], [3, 'c'] ]) => [ [1, 2, 3], [a, b, c] ]
// solution([ [1, 3, 5], [2, 4, 6] ]) => [ [1, 2], [3, 4], [5, 6] ]
// solution([[]]) => []
[ [ [ ] ] ] = [ [] ]
ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
*/

// solution([[1, 3, 5], [2, 4, 6]]);
// solution([[1, 'a'], [2, 'b'], [3, 'c']]);

// const solution = arr => {};

const navigation = [
 {name: 'Главная'},
 {
   name: 'Каталог',
   children: [
     {
       name: 'Компьютеры',
       children: [{name: 'Ноутбуки'}, {name: 'Планшеты'}]
     }
   ]
 },
 {name: 'Профиль'}
];

class Items{
  constructor(){
    this.ul
  }

  createStructure(arr){
    let body = document.body
    arr.map(elem => {
      let keys = Object.keys(elem);
      body.innerHTML += this.createH1(elem)
      if(keys.includes('children')){
        body.innerHTML +="<ul></ul>"    
        this.ul = document.querySelector('ul'); 
        this.children(elem)     
      }
    })
  }
  
  children(elem){
    elem.children.map(innerElem => {   
      this.ul.innerHTML += this.createH1(innerElem)
      this.createLi(innerElem.children)
    })
  }
  
  createH1(elem){
    return `<h1>${elem.name}</h1>`
  }
  
  createLi(elem){
    let innerUl = this.ul.innerHTML
    innerUl.innerHTML += `<ul>`
    elem.map(innerElem => {    
      innerUl.innerHTML += `<li>${this.createH1(innerElem)}</li>`
      console.log(this.ul)
    })
    this.ul.innerHTML += `</ul>`
    
  }
}


let obj = new Items()
obj.createStructure(navigation)

/*
Визуализируйте массив, если в коллекции есть свойство
children,
тогда создайте вложенный лист
name - свойство h1
children ul -> li
Используйте innerHTML
*/

/*
<h1>Main</h1>
<ul>
 <h1>Catalog</h1>
 <li>
   <ul>
     <h1>Comp</h1>
     <ul>
       <li>
         <h1>Notebook</h1>
         <h1>...</h1>
       </li>
     </ul>
 </li>
*/

const visualArray = arr => {};

/*  ПРИЛОЖЕНИЕ  */
// Добавьте скрипт который будет рисовать всю страницу с таблицей.
// https://github.com/aleksandra-maslennikova/telephone-book
// innerHTML должно быть максимум

/* ТЕСТ */

/*
* Добавьте реальных вопросов про JavaScript с вариантами
* ответов
* */

// 3. При нажатии на кнопку если были выбраны правильные ответы,
// отображайте "ПРАВИЛЬНО" или не правильно
// или отображайте значек X или галочку, возле вопроса



/* @SUPER-FRONT */

/*
* 4. По нажатию на кнопку(проверить) отобразится "модальное" окно в котором отобразится
* весь тест с отображенными правильными ответами(обозначьте их) и неправильными(тоже обозначьте)
* Отобразите количество правильных и неправильных ответов
* счетчик
* У модального окна будет 2 кнопки "пересдать" и "отправить"
* *
* Если все ответы правильные, кнопка пересдать не активна
* disabled
*
* По нажатию отправить, модальное окно закрывается и на экране надпись "ваши ответы успешно
* отправлены"
*
* --- Если все ответы правильные отобразите картинку
*
* По нажатию на пересдать - появляется снова наш тест сначала
*
* @Super-FRONT @ 2
* При загрузке странице добавьте таймер отсчета с милисекундами -> В модальном окне отобразите
* количество затраченного времени на тест
*
* */