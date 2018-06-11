/*
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
*
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
*                            Если длина 10 -> 'you win'
*
*
*
*
* */

function typeOfArgument(data){
	if(!isNaN(+data) || (!Array.isArray(data) && typeof data === 'object')){
		return true;
	}else if(typeof data === 'function'){
		return false;
	}else if(typeof data === 'string'){
		if(data.length!=10){
			return `длина вашей строки: ${data.length}`;
		}else{
			return `you win`;
		}
	}
}

const func = function foo(){};
const str = `asdfasdfasd`;
const num = 11;
const obj = {param1:1,param2:2};

console.log(typeOfArgument(func));

/*
*
*  Задача в классе !
*
* */


/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
	const min = Math.min(a,b);
	const max = Math.max(a,b);
	let arr = [];
	let count = 0;
	for(let i = min;i<=max;i++){
		arr[count]=i;
		count++;
	}
	return arr;
}

console.log(numbersBetween(3, 5));
// 3, 4, 5

console.log(numbersBetween(10, 12));
// 10, 11, 12


/*
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */

// 1. FizzBuzz 3, 5, 3 && % 5

function FizzBuzz(number) {
		let result = ``;
		if(number%3!=0 && number%5!=0){
			result = number;
		}else{
			if(number%3==0){
				result = `Fizz`;	
			}
			if(number%5==0){
				result = `${result}Buzz`;
			}
		}
		console.log(result);
}

function fizzBuzz100(number) {
		for(let i = number;i<=100;i++){
			FizzBuzz(i);
		}
}

fizzBuzz100(80);


/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

let arr = [1, null, undefined, 'str', {}, [], function() {}];


function typesOfElements(data){
		let arr = [];
		for(let i = 0;i<data.length;i++){
			arr[i]=typeof data[i];
		}
		return arr;
}

console.log(typesOfElements(arr));


/*
 1. @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN,
 тогда добавляет данному объекту свойство unknownAge: true
 2. На основании нового массива, создайте новую функцию, которая вернет новый массив
	содержащий все объекты содержащие свойство unknownAge: true
 */

let array = Array.from({length: 35},
	(value, index) => (index % 2 ? {age: index + 2} : {age: NaN}),
);


function solution(arr) {
    for(let i = 0; i<arr.length;i++){
        if(isNaN(arr[i].age)){
            arr[i][`unknownAge`]=true;          
        }  
    }
    return unknownAgeArr(arr);
}

function unknownAgeArr(arr){
    let result = [];
    let count = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i].unknownAge){
            result[count]=arr[i];
            count++;
        }
    }
    return result;
}
console.log(solution(array));
//solution(array);
