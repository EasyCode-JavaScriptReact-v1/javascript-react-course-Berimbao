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
  'a',
  0,
  0,
  'b',
  null,
  'c',
  'd',
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

function moveZeroToEnd2(arr) {
	let zeroArray = [];
	let returnArray = [...arr];
	let soughtValue = 0;
	
	while(returnArray.indexOf(soughtValue)){	
		let zeroIndex = returnArray.indexOf(soughtValue);
		let elem = returnArray[zeroIndex];		
		zeroArray.push(elem);
		returnArray.splice(zeroIndex,1);
	}

	return returnArray.concat(zeroArray);;
}

function moveZeroToEnd(arr) {
	let zeroArray = [];
	let noZeroArray = [];

	for(let i = 0; i< arr.length; i++){
		let elem = arr[i];
		elem == 0 ? zeroArray.push(elem) : noZeroArray.push(elem);

	}

	return noZeroArray.concat(zeroArray);;
}

console.log(moveZeroToEnd(arr1));
console.log(moveZeroToEnd(arr2));

/*
 2. Верните сумму двух найменьших чисел в массиве
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 */

function minimalNumber(arr) {
	let tempArray = [...arr];
	let min_1 = Math.min(...tempArray);
	tempArray.splice(tempArray.indexOf(min_1),1);
	let min_2 = Math.min(...tempArray);

	return min_1+min_2;
}

console.log(minimalNumber([10,20,30,1,31,11,10]));
console.log(minimalNumber([-1,0,25]));
console.log(minimalNumber([-4,-10,25,10]));
console.log(minimalNumber([0,200,10,25,15]));

/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

function nameShuffler(str) {
	let arr = str.split(" ").reverse().join(' ');
	console.log(arr);
}

nameShuffler('john McClane'); 
nameShuffler('Arnold Schwarzenegger');
nameShuffler('James Bond');

/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

function capMe(arr) {
	let resultArray = [];

	for(let i = 0; i<arr.length; i++){
		let elem = arr[i];
		let elementArray = elem.toLowerCase().split('');
		let firstLetter = elementArray[0].toUpperCase();	

		elementArray.shift();
		elementArray.unshift(firstLetter);
		elementArray = elementArray.join('');

		resultArray[i] = elementArray;
	}

	return resultArray;
}

console.log(capMe(['jo', 'nelson', 'jurie']));
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));

// @SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 example:
  [1,3,5,9] => 7 (9-1) / 4 == 2
  [0,8,16,32] => 24
  [4, 6, 8, 10] => 2 // число сначала
  [0,16,24,32] => 8
 */

function random(arr) {
	let result = 0;
	for(let i = 0; i < arr.length; i++){
		let elem = arr[i];
		let elemPlusOne = arr[i+1];
		let elemPlusTwo = arr[i+2];		
		let step = (elemPlusOne-elem);
		if(elemPlusOne+step == elemPlusTwo){
			for(let i = 0; i < arr.length; i++){
				let elem = arr[i];
				let elemPlusOne = arr[i+1];		
				if(i==0){
					if(elem-step>0){
						result = elem-step;
						break;
					}
				}
				if(elem+step != elemPlusOne){
					result = elem+step;
					break;
				}	
			}
		}
	}
	return `Array [${arr}] don't contain ${result}`;	
}

console.log(random([1, 3, 5, 9]));
console.log(random([0, 8, 16, 32]));
console.log(random([0, 16, 24, 32]));
console.log(random([4, 6, 8, 10]));

/*
 Задача с собеседований*
 2. Напишите функция которая преобразовывает/открывает скобки всех
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 example:
  [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
  [25,10,[10,[15]]] => [25,10,10,15]
 */

function openBraces(arr) {
	let resultArray = [];
	let str = ``;
	// if(Array.isArray(arr)){		
	// 	for(let i = 0; i<arr.length; i++){
	// 		let elem = arr[i];
	// 		str = str+elem;	
	// 		console.log(str);	
	// 		openBraces(resultArray);			
			
	// 	}
	// }
	//return resultArray;
}

console.log(openBraces([[1,2],[3,[4]],5, 10]));
//console.log(openBraces([25,10,[10,[15]]]));