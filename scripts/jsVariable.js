//EXAMPLE
const name = 'Taras'
const age = 31
const header = document.querySelector('#header')
const header2 = document.getElementById('header')
const navLinks = document.querySelectorAll('.nav__link')
console.log(navLinks);

function sayHello() {
	console.log('Hi');
}
sayHello()
function plusString() {
	let msg = 'age=' + 31
	console.log(msg);
}
plusString()
function sum(b) {
	let a = 25
	let sum = 25+25*2+a
	let sumMinus = sum - 50
	let sumMinusPlusGiveNumberInFunction = sum - 50 + b
	console.log(sum);
	console.log(sumMinus);
	console.log(sumMinusPlusGiveNumberInFunction);
	return sumMinusPlusGiveNumberInFunction
}
let result = sum(1000)
console.log(result);


let user = {
	age: 20,
	name: 'Taras',
}



