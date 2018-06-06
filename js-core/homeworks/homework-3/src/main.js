/*
Напишите функцию которая будет возвращать объект
с свойством name, а значением будет первый аргумент функции
*/

function returnObject(name) {
  const user = {
    name:name
  }
  return user;

}

var someObject = returnObject('Oleg');
console.log(someObject);

/*
Функция будет принимать 1 аргумент - ОБЪЕКТ у которого
будет свойство name
и возвращать новый объект изменяя свойство name
в большой регистр
*/

function toUpperCase(obj) {
  const obj_2 = {
    name:obj.name.toUpperCase()
  }
  return obj_2;

}
const objectWithName = { name: 'privet kak dela' };
console.log(toUpperCase(objectWithName));

/*
1. Напишите функцию которая принимает в
качестве аргумента массив и элемент массива
и добавляет элемент в конец массива
*/

let arr = [];
arr[0] = 'privet';
arr[1] = 'poka';
arr[2] = 'zdrastvuite';

function addToArray(arrParam, newElem) {
  arrParam[arrParam.length] = newElem;
  return arrParam;
  // без "естественных" способов добавления
}

addToArray(arr, 34);
addToArray(arr, 55);
console.log(arr);

/*
2. Напишите функцию которая получает 3 параметра
и возвращает объект типа:
    {
      argument1: param1,
      argument2: param2,
      argument3: param3,
    }
*/

function simpleObjectGenerator(one, two, three) {
  let param1 = one;
  let param2 = two;
  let param3 = three;

  const obj = {
    argument1:param1,
    argument2:param2,
    argument3:param3
  }

  return obj;
}

console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));
/* {
   argument1:'protocol',
   argument2:{url:'22'},
   argument3:8000
}*/

// var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

// console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));
/* {
 argument1:'77',
 argument2:[{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }],
 argument3:PRIVET KAK DELA CHTO NOVOGO
 }*/

///////////////////////////////////////////////
/*
3.  Напишите функцию которая принимает 3 аргумента,
     третий аргумент - это объект.
    Функция создает новый объект и добавляет ключ
    это первый аргумент, а значение - второй аргумент
    Проверяет если есть свойство name в переданном объекте,
    тогда добавляет данное свойство и возвращает новый объект
*/
var myName = { name: 'Oleg' };

function addNameToUser(newKey, newValue, userName) {
  const obj = {}
  obj[newKey] = newValue;
  if(userName.name){
    obj.name = userName.name
  }
  return obj;

}

console.log(addNameToUser('family', '%Lustenko%', myName));
console.log(addNameToUser('name', 'privet Pasha', {}));
/* {name:'Oleg', family:'%Lustenko%'} */

console.log(myName);
/* {name:'Oleg'} */

/////////////////////////////////

/*
-> @@ SUPER !
  Напишите функцию, которая будет
   возвращать 'Fizz' если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5,
   'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/

function fizzBuzz(num) {
   /* Ваш код здесь */
  let fizz = ``;
  let buzz = ``;
  let strFizzBuzz = null;

  if(num%3==0){
    fizz = `Fizz`;
  }
  if(num%5==0){
    buzz = `Buzz`;
  }
  if(num%3!=0 && num%5!=0){
    strFizzBuzz = num;
  }else{
    strFizzBuzz = `${fizz}${buzz}`;
  }
  return strFizzBuzz; 
}

fizzBuzz(1); // 1
fizzBuzz(2); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5); // 'Buzz'
// ...
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'

/* -> @@ м
Напишите функцию, которая будет принимать 4 аргумента,
последний всегда функция.
Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом
*/

function super2(arg1, arg2, arg3, callback) {
  let arr = [arg1,arg2,arg3];
  callback(arr);
}

function returnArr(arr){
  console.log(`array contain: ${arr}`);
}

super2(5,13,`asdasfdsa`, returnArr);