// Домашнее задание №7
// Задача №1
// С помощью конструктора создайте несколько объектов пользователей с полями name и age.
// Пример объекта:
// {name: ‘Max’, age: 21}
// Отдельно создайте функцию askQuestion, которая принимает в качестве аргументов две строки:
// Строка с приветствием
// Вопрос к пользователю
// Функция должна возвращать конкатенированную строку, в которой в начале будет приветствие, после будет стоять имя пользователя, которому задается вопрос (использовать this), после чего будет идти вопрос который был задан пользователю. Вызвать этот метод с разными аргументами у нескольких пользователей, используя метод apply().

function User(name, age) {
	this.name = name
	this.age = +age > 0 ? +age : 1
}

function askQuestion(helloMessage, question) {
	var name = this.name ?? 'noname'
	return `${helloMessage}, ${name}! ${question}`
}

var firstUser = new User('Max', 22)
var secondUser = new User('Alex', 33)

console.log(askQuestion.apply(firstUser, ['Привет', 'Как дела?']))
console.log(askQuestion.apply(secondUser, ['Привет', 'Что делашь?']))



//============================================================================================================================================================//


// Задача №2
// Создайте три объекта товаров.
// Пример объектов:
// {name: ‘Samsung Galaxy S20’, price: 800}
// {name: ‘Xiaomi 11’, price: 600}
// {name: ‘iPhone 12’, price: 1000}
// Напишите функцию getDiscountAmount, которая будет принимать единственным параметром число (процент скидки) и на основании свойства price (использовать this) будет возвращать сумму скидки для конкретного товара, предварительно убедившись что price отличен от нуля. При помощи метода bind создать функции расчета скидки для каждого объекта.

function Product(name, price) {
	this.name = name
	this.price = +price > 0 ? +price : 0
}

function getDiscountAmount(discount) {
	discount = !isNaN(discount) && discount <= 100 && discount >= 0 ? discount : 0
	var price = typeof this.price !== 'undefined' && this.price > 0 ? this.price : 0

	return price * discount / 100
}

var product1 = new Product('Samsung Galaxy S20', 800)
var product2 = new Product('Xiaomi 11', 600)
var product3 = new Product('iPhone 12', 1000)

prod1GetDiscount = getDiscountAmount.bind(product1)
prod2GetDiscount = getDiscountAmount.bind(product2)
prod3GetDiscount = getDiscountAmount.bind(product3)

console.log(`Discount for ${product1.name}:`)
console.log(prod1GetDiscount(10))

console.log(`Discount for ${product2.name}:`)
console.log(prod2GetDiscount(20))

console.log(`Discount for ${product3.name}:`)
console.log(prod3GetDiscount(30))

//=====================================================================================================================================================//


// Задача №3
// Создайте массив figures, который будет состоять из объектов двух видов фигур: прямоугольников и кругов (10 элементов).
// Примеры объектов:
// Круг: {figureType: ‘circle’, radius: 5 }
// Прямоугольник: {figureType: ‘rectangle’, weight: 100, height: 50}
// Написать функцию, которая будет проверять поле figureType, высчитывать площадь фигуры (реализовать с использованием this), для кругов округлить получившийся результат. Написать цикл для массива figures и выводить в консоль следующую строку:
// ‘Фигура №{номер фигуры} имеет площадь {результат вычислений}’
// В цикле для каждого объекта вызвать ранее написанную функцию используя метод call.

figures = [
	{figureType: 'circle', radius: 5 },
	{figureType: 'rectangle', weight: 100, height: 50},
	{figureType: 'circle', radius: 4 },
	{figureType: 'circle', radius: 7 },
	{figureType: 'rectangle', weight: 20, height: 50},
	{figureType: 'rectangle', weight: 100, height: 30},
	{figureType: 'circle', radius: 3 },
	{figureType: 'circle', radius: 1 },
	{figureType: 'rectangle', weight: 40, height: 40},
	{figureType: 'circle', radius: 8 },
]

function figureArea() {
	if (this.figureType === 'circle') {
			return (this.radius * 3.14 * 3.14).toFixed(2)
	}
	else if (this.figureType === 'rectangle') {
			return this.weight * this.height
	}
	return 0
}

figures.forEach(function(figure, i) {
	console.log(`Figure №${i} area is ${figureArea.call(figure)}`)
})

//======================================================================================================================================================//


// Задача №4
// Создайте конструктор ProductCreator. Добавьте ему свойство instanceCounter и метод showProductCreatorInstanceCounter. Метод showProductCreatorInstanceCounter должен наследоваться всеми потомками конструктора ProductCreator и возвращать число созданных потомков этим конструктором. При создании нового экземпляра конструктором ProductCreator счётчик instanceCounter должен увеличиваться на 1 и это значение должно быть записано в поле id создаваемого объекта.

function ProductCreator() {
	this.instanceCounter = ++baseInstanceCounter
	this.id = this.instanceCounter
	this.showProductCreatorInstanceCounter = function () {
			return baseInstanceCounter
	}
}

var baseInstanceCounter = 0
prod1 = new ProductCreator()
prod2 = new ProductCreator()
prod3 = new ProductCreator()
prod4 = new ProductCreator()

console.log(prod2.showProductCreatorInstanceCounter())
console.log(prod2.id)