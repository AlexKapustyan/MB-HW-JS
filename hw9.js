// Домашнее задание №9


// Задача №1
// Напишите функцию, которая единственным аргументом будет принимать массив чисел. Функция должна возвращать сумму квадратных корней для всех четных чисел массива. Для реализации функционала функции используйте методы filter(), map() или reduce().

function arraySum(arr) {
	const evenИumbers = arr.filter((num) => {
		return num % 2 === 0
	})

	const sumNum = evenИumbers.map((num) => num + num)

	const sumArr = sumNum.reduce((a, b) => (a + b))
	console.log(sumArr)
}

arraySum([1, 2, 3, 4])

//====================================================================================================================================================//

// Задача №2
// Напишите функцию, которая единственным аргументом будет принимать массив чисел. Функция должна возвращать число элементов, которое нужно сложить чтобы в сумме получилось больше 20-ти. Если сумма всех чисел массива меньше 20, вывести сообщение об этом в консоль. Для реализации функционала функции используйте метод reduce().

function arraySum(arr) {
	const sumArr = arr.reduce((acum, item) => acum + item)
	if (sumArr >= 20) {
		console.log(sumArr)
	} else {
		console.log('Сумма чисел массива меньше 20')
	}
}
arraySum([1, 2, 3, 4])

//====================================================================================================================================================//

// Задача №3
// Напишите функцию, которая единственным аргументом будет принимать массив строк. Функция должна возвращать массив со строками, длина которых больше 5-ти символов. Для реализации функционала функции используйте метод filter()
// Реализуйте функционал используя метод reduce().

function arrayString(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > 5) {
			console.log(arr[i])
		}
	}
}

//Filter//
function arrayString(arr) {
	return arr.filter(item => item.length > 5)
}

//Reduce//
function arrayString(arr) {
	const arrReduce = arr.reduce(function (accum, item) {
		if (value.length > 5) {
			accum.push(item)
		}
		return accum
	}, [])
	return arrReduce;
}

//=============================================================================================================================================================================================//

// Задача №4
// Напишите функцию, которая единственным аргументом будет принимать массив чисел, одним элементом которого должен быть 0. Функция должна возвращать сумму первых N элементов до первого нуля. Если в массиве нет элементов 0, то возвращать строку ‘Переданный массив не содержит нулей’. Для реализации функционала функции используйте метод forEach() или reduce().

function func(arr) {

	const arrSome = arr.some((item => item === 0))
	if (arrSome) {
		const arrFindZero = arr.slice(0, arr.indexOf(0))
		const arrSum = arrFindZero.reduce((accum, item) => accum += item)
		return arrSum
	} else {
		return 'Переданный массив не содержит нулей'
	}
}

//==============================================================================================================================================================================================//

// Задача №5
// Написать четыре функции, каждая из которых будут в качестве аргумента принимать массив studentsMarks и возвращать указанные ниже значения:
// Массив с именами студентов, записанными заглавными буквами. Для реализации функционала функции используйте метод map().
// Массив с именами студентов, набравших более 50 баллов и имеющих id больше 120. Для реализации функционала функции используйте метод filter()
// Общую сумму баллов студентов. Для реализации функционала функции используйте метод reduce().
// Массив с именами студентов, у которых баллы больше 50, после начисления поощрения в 15 баллов. Для реализации функционала функции используйте метод reduce().
// Пример массива:
// const studentsMarks  = [
//       	{name: 'John', id: 123, mark : 98 },
//          {name: 'Baba', id: 101, mark : 23 },
//          {name: 'yaga', id: 200, mark : 45 },
//          {name: 'Wick', id: 115, mark : 75 }
// ]

const studentsMarks = [
	{ name: 'John', id: 123, mark: 98 },
	{ name: 'Baba', id: 101, mark: 23 },
	{ name: 'yaga', id: 200, mark: 45 },
	{ name: 'Wick', id: 115, mark: 75 }
]

//Массив с именами студентов, записанными заглавными буквами. Для реализации функционала функции используйте метод map//
const toUpperStudentsMarks = studentsMarks.map((item) => item.name.toUpperCase())

//Массив с именами студентов, набравших более 50 баллов и имеющих id больше 120. Для реализации функционала функции используйте метод filter()//
const moreIdAndMark = studentsMarks.filter((item) => {
	return item.id > 120 && item.mark > 50
})

//Общую сумму баллов студентов. Для реализации функционала функции используйте метод reduce().//
const sumMark = studentsMarks.reduce((acum, item) => {
	return acum += item.mark
}, 0)


//Массив с именами студентов, у которых баллы больше 50, после начисления поощрения в 15 баллов. Для реализации функционала функции используйте метод reduce()//
const sumMark = studentsMarks.reduce((acum, item) => {
	if (item.mark + 15 > 50) {
		acum.push(item)
	}
	return acum
}, [])

//==============================================================================================================================================================================================//

// Задача №6
// Напишите функцию, которая единственным аргументом будет принимать массив чисел. Функция должна возвращать массив его сумм каждого элемента и всех стоящих перед ним чисел. Для реализации функционала функции используйте метод .forEach().

function sumArr(arr) {
	let num = 0
	let arrow = []
	arr.forEach((item) => arrow.push(num += item))
	return arrow
}

//=============================================================================================================================================================================================//


// Задача №7
// Напишите функцию, которая принимает массив в качестве единственного аргумента и возвращает полученный массив без повторяющихся значений. Для реализации функционала функции используйте методы .filter() и .indexOf().

function noRepetArrow(arr) {
	const noRepet = arr.filter((item, index) => arr.indexOf(item) === index)
	return noRepet
}

//==============================================================================================================================================================================================//

// Задача №8
// Напишите функцию, которая принимает массив с вложенными массивами и возвращает одномерный (плоский) массив.

function uniteArray(arr) {
	return arr.reduce((accum, inem) => accum.concat(inem))
}

//==============================================================================================================================================================================================//

// Задача №9
// Напишите функцию, которая в качестве аргументов принимает массив элементов и число. Функция должна возвращать массив с массивами из  элементов переданного массива. Длина внутренних массивов должна быть равной числу, переданному в качестве аргумента. Если длина исходного массива не кратна переданному числу, то оставшиеся элементы также поместить в массив.



//==============================================================================================================================================================================================//

// Задача №10
// Напишите функцию, которая в качестве единственного аргумента принимает массив объектов с информацией о работниках.
// Пример массива:
// [
//   {
//     name: 'Sasha',
//     age: 45,
//     salary: 1900,
//   },
//   {
//     name: 'Max',
//     age: 21,
//     salary: 1500,
//   },
//   {
//     name: 'Nikita',
//     age: 29,
//     salary: 800,
//   },
//   {
//     name: 'Sergey',
//     age: 32,    
//     salary: 2300,
//   }
// ]
// Функция должна отсортировать данный массив по возрастанию зарплаты и вернуть получившийся массив. Для реализации функционала функции используйте метод .sort().

const user = [
	{
		name: 'Sasha',
		age: 45,
		salary: 1900,
	},
	{
		name: 'Max',
		age: 21,
		salary: 1500,
	},

	{
		name: 'Nikita',
		age: 29,
		salary: 800,
	},
	{
		name: 'Sergey',
		age: 32,
		salary: 2300,
	}
]

function sortSalaryUser(arr) {
	return arr.sort((a, b) => a.salary - b.salary)
}

sortSalaryUser(user)

//==============================================================================================================================================================================================//

// Задача №11
// Написать функцию, которая будет принимать массив в качестве аргумента и возвращать отсортированный массив по убыванию возраста. Для отладки кода использовать пример массива из задачи №10. Для реализации функционала функции используйте метод .sort().

const user = [
	{
		name: 'Sasha',
		age: 45,
		salary: 1900,
	},
	{
		name: 'Max',
		age: 21,
		salary: 1500,
	},
	{
		name: 'Nikita',
		age: 29,
		salary: 800,
	},
	{
		name: 'Sergey',
		age: 32,
		salary: 2300,
	}
]

function sortAgeUser(arr) {
	return arr.sort((a, b) => b.age - a.age)
}

sortAgeUser(user)
//==============================================================================================================================================================================================//

// Задача №12
// Напишите функцию, которая принимает массив отсортированных работников по зарплате и число. Для отладки кода использовать результат работы функции из задачи №10. Функция должна возвращать первый найденный объект массива, у которого зарплата меньше, чем переданное в аргументы число. Если в массиве нет элементов удовлетворяющих проверке, возвращать сообщение ‘Работников с зарплатой меньше { переданное число}$ не найдено’.  Для реализации функционала функции используйте метод .find().

const user = [
	{
		name: 'Sasha',
		age: 45,
		salary: 1900,
	},
	{
		name: 'Max',
		age: 21,
		salary: 1500,
	},
	{
		name: 'Nikita',
		age: 29,
		salary: 800,
	},
	{
		name: 'Sergey',
		age: 32,
		salary: 2300,
	}
]

function sortSalaryUser(arr) {
	return arr.sort((a, b) => a.salary - b.salary)
}

const findSalaryUser = sortSalaryUser(user)

function findSalary(arr, num) {
	const findSalary = findSalaryUser.find((item) => item.salary < num)
	return findSalary === undefined ? `Работников с зарплатой меньше ${num} не найдено` : findSalary
}

findSalary(user, 700)