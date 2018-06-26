/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 *
 * */

function solution1(someString) {
  let resoultStr = "";
  return function(someString) {
    return resoultStr = resoultStr + " " + someString;
  };
  /* ВАШ КОД */
}

let stringBuffer = solution1();

console.log(stringBuffer("Замыкания")); // Замыкания
console.log(stringBuffer("Использовать нужно")); // Замыкания Использовать нужно
console.log(stringBuffer("Привет")); // Замыкания Использовать нужно Привет вызываем много раз

/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */

function validBraces(str) {
  let tmpArray = str.split("");
  let result = true
  let result1 = false;
  let result2 = false;
  let result3 = false;

  for(let i = 0; i<tmpArray.length; i++){
    let elem = tmpArray[i];
    if(elem=='('){
      result1 = findBraces(tmpArray,i,')')
      if(!result1){
        return false
      }
    }
    if(elem=='{'){
      result2 = findBraces(tmpArray,i,'}')
      if(!result2){
        return false
      }
    }
    if(elem=='['){
      result3 = findBraces(tmpArray,i,']')
      if(!result3){
        return false
      }
    }
  }
  return result

}

function findBraces(arr,index,secondBraces){
  for(let i = 0; i<arr.length; i++){
    if(arr[index+1] == secondBraces){
      return true;
    }else if(arr[arr.length-(index+1)] == secondBraces){
      return true;
    }else{
      return false;
    }
  }
}

console.log(validBraces("(){}[]")); // => returns true
console.log(validBraces("(}")); // => returns false
console.log(validBraces("[(])")); // => returns false
console.log(validBraces("([{}])")); // => returns true
console.log(validBraces("({[]})")); // => returns true
console.log(validBraces("[[(]])}")); // => returns false

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму
 * всех натуральных чисел
 * sum(5) // 5+4+3+2+1
 *
 * Вычисления должны кешироваться, если в функцию попадает закешированное
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * Нельзя использовать внешние значения/переменные/функции
 *
 * */


function sum(num) {
  let number = num;
  let obj = {};
  
  return function(number){ 
    let resoult = 0;
    let num = number; 
    if(obj[number]){
      return obj[number] + ` from cache`
    }else{
      while(num>0){
        resoult = resoult+num;
        num--;
      }
      obj[number] = resoult;
      return resoult + ` saved to cache`
    }
  }
}

let workWithCache = sum();

console.log(workWithCache(5)); // 15 Значение кешировано
console.log(workWithCache(5)); // 15 Значение взято из кэш

console.log(workWithCache(6)); // 21 Кешировано
console.log(workWithCache(6)); // 21 Значение взято из кэша
