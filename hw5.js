// Домашнее задание №5


// Задача №1
// Создайте IIFE, которое получает пароль в аргументе и возвращает внутреннюю функцию, которая в качестве аргумента принимает введенную строку и возвращает булево значение true, если введенная строка совпадает с паролем и faulse – если не совпадает. Для сохранения результата IIFE создайте переменную checkPassword.

var password = '1111'

var checkPassword = (function (pas) {
	return function (checkPass) {
		return checkPass === pas
	}
})(password)
console.log(checkPassword(prompt('Введите пароль')))


//==============================================================================================================================================================================================//

// Задача №2
// Создайте IIFE, которое получает число n (начальное значение) в качестве аргумента родительской функции и возвращает функцию, которая получает число, прибавляет его к n, которое находится в замыкании, и возвращает результат. Для сохранения результата IIFE создайте переменную addeter.

var addeter = ((function (n) {
	return function (number) {
		return n + number
	}
})(+prompt('Введите число (n)')))

console.log(addeter(+prompt('Введите 2-е число ')))

//==============================================================================================================================================================================================//

// Задача №3
// Создайте IIFE, которое вернёт функцию, у которой в замыкании будет переменная counter со значением 10. Сделайте так, чтобы каждый вызов возвращённой функции уменьшал это число на 1 и выводил на экран уменьшенное число. Добавьте функционал, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.
var counter = 10
var decreasingNumber = (function () {	
	return function () {
		return counter > 0 ? counter-- : console.log('отсчет окончен')
	}
})(counter)


//==============================================================================================================================================================================================//

// Задача №4
// Напишите функцию, которая в качестве единственного аргумента принимает массив чисел и возвращает сумму чисел этого массива.
// Реализовать с помощью рекурсии

function recursSum(arr, sum) {
	sum = sum || 0
	return arr.length ? recursSum(arr, sum + arr.pop()) : sum
}
recursSum([1, 2])


//==============================================================================================================================================================================================//

// Задача №5
// Напишите функцию, которая в качестве аргументов принимает два числа. Первое число – начало диапазона. Второе число – конец диапазона. Вернуть строку всех целых чисел из этого диапазона через запятую.
// Реализовать с помощью рекурсии

function rangeNum(first, last) {
	if (first - last === 0) {
		return [first]
	} else {
		return (first = rangeNum(first + 1, last), first.unshift(first))
	}
	return rangeNum
};

rangeNum(5, 10)



var first = 5
var last = 10

console.log('First is:')
console.log(first)
console.log('Lastis:')
console.log(last)
console.log('Gap is:')
console.log(getGap(first, last))

function getGap(first, last, gap) {
  if (first > last) {
    return 'Wrong'
  }
  gap = gap ? gap : ''
  if (first < last) {
		gap += first++ + ', '
    return getGap(first, last, gap)
  }
  return gap + last
}

//==============================================================================================================================================================================================//

// Задача №6
// Напишите функцию, которая принимает массив из последовательности чисел и возвращает максимальное число.
// Реализовать с помощью рекурсии

function getMaxOfArray(numArray) {
	if (numArray === 0) {
		return numArray
	} else {
		return Math.max.apply(null, numArray);
	}
}

getMaxOfArray([1, 2, 3])

//==============================================================================================================================================================================================//

// Задача №7
// Создать объект пользователя со следующими полями:
// firstName
// lastName
// birthday
// Значения полей указать произвольное. Реализовать следующие геттеры и сеттеры:
// геттер fullName - возвращает конкатенированную строку, состоящую из firstName и lastName
// сеттер fullName - устанавливает значения в поля firstName и lastName
// геттер age - возвращает количество лет от даты указанной в birthday, до текущего дня.
// сеттер age - изменяет год в поле birthday, вычисляя это значение из текущего года и нового значения

var user = {
	firstName: 'Alex',
	lastName: 'Kapustian',
	birthday: new Date(1985, 10, 2),

	get fullName() {
			return `${this.firstName} ${this.lastName}`
	},

	set fullName(fullName) {
			[this.firstName, this.lastName] = fullName.split(" ")
	},

	get age() {
			var now = new Date()
			var dateNowWithoutTime = new Date(now.getFullYear(), now.getMonth(), now.getDate())
			var birthdayThisYearWithoutTime = new Date(now.getFullYear(), this.birthday.getMonth(), this.birthday.getDate())	
			var age = now.getFullYear() - this.birthday.getFullYear()	
			if (dateNowWithoutTime < birthdayThisYearWithoutTime) {
					age--
			}

			return age
	},

	set age(age) {
			var now = new Date()
			var birthdayYear = now.getFullYear() - age

			var dateNowWithoutTime = new Date(now.getFullYear(), now.getMonth(), now.getDate())
			var birthdayThisYearWithoutTime = new Date(now.getFullYear(), this.birthday.getMonth(), this.birthday.getDate())
			if (dateNowWithoutTime < birthdayThisYearWithoutTime) {
					birthdayYear--
			}

			this.birthday.setFullYear(birthdayYear)
	}
}

console.log(user.fullName)
user.fullName = 'Max Ivanov'
console.log(user.fullName)

console.log(user.age)
user.age = 10
console.log(user.age)
//==============================================================================================================================================================================================//

// Задача №8
// Создать объект товара со следующими полями:
// name
// id
// price
// discount
// Значения полей указать произвольное. Реализовать следующие геттеры и сеттеры:
// геттер discountPrice - возвращает цену товара, уменьшенную на количество процентов указанных в поле discount
// сеттер discountPrice - устанавливает значение поля price, увеличивая новое значение на количество процентов указанных в поле discount

var product = {
	name: 'Phone',
	id: '1111',
	price: 1000,
	discount: 10,

	get discountPrice() {
		return this.price - this.price * (this.discount / 100)
	},

	set discountPrice(newPrice) {
		return this.price = newPrice + newPrice * (this.discount / 100)
	}
}

