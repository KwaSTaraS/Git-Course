// create Array
let arr = new Array(); //using this rary
let arr2 = [];

// Array value
let arrOne = [
	'Taras',
	'Ivan',
	'Petro',
];
// or
let arrOne2 = ['Taras','Ivan','Petro',];

console.log(arrOne[1]);
console.log(arrOne[5]); //undefined

// Array another type of value (object, boolen, ...)
let arrTwo = [
	'Koly',
	{
		type: 'JS',
		age: 31
	},
	true,
	function () {
		console.log('Hello, iam Tarsa');
	}
]
console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[1].age);
console.log(arrTwo[2]);
arrTwo[3]()

// Matrix(multidimensional) array
let matrix = [
	[1, 2, 3,],
	[4, 5, 6,],
	[7, 8, 9,]
]
console.log(matrix);
console.log(matrix[0][1]);// first position after a kay, width after height (2)

// length Array
let arrFour = ['Petro', 'Ivan', 'Vova',]; //3
console.log(arrFour);
console.log(arrFour.length); //3

//Access to Array
//Array is a Object, and copy how a link

let arrFive = ['Petro', 'Ivan', 'Vova',];
console.log(arrFive);

let arrNewFive = arrFive; //copy link
arrNewFive.length = 2; // edit length to 2 with 3
console.log(arrFive);

//Edit value Array
let arrSix = ['Petro', 'Ivan', 'Vova',];
arrSix[0] = 'Taras';
console.log(arrSix);
//add new value
arrSix[3] = 'John';
console.log(arrSix);

//Methods Array
	//First its a queue or ordered collection of items
		//Queue has a two types operations
			//1. add element in end queue
			//2. delete elemnt in begin, strafe queue, 2 element -> in 1 element
	//Another variant use for array - data structure = name Stack
		//Stack has a two types operations
			//1.add element in end
			//2.delete last element
//Array in JS can work and how queue, and how stack
//we can add/delete elements how in begin, so and in end array
//And in this us help next methods:

//add (Method push/pop run very fast)
	//Method 'push' = add elements in end array
	//Method pop fast
let arrSeven = ['Ivanka', 'Igor', 'Olja',];
arrSeven.push('Angelica');
console.log(arrSeven);

arrSeven.push('Dima', 'Katja');
console.log(arrSeven);

	//Method 'unshift' = add elemtn in begin array
	//Method unshift slowly
let arrTen = ['Ivanka', 'Igor', 'Olja',];
arrTen.unshift('Petro');
console.log(arrTen);

arrTen.unshift('Petro', 'Max', 'Katja', 'Olesja');
console.log(arrTen);

//del
	//Method 'shift' = del elemtnt in begin, after second element stay first
	//Method shift slowly
let arrEight = ['Max', 'Katja', 'Olesja'];
arrEight.shift(); //del Max(first element)
console.log(arrEight);

	//Method 'pop' = dell last element
	//Method pop fast
let arrNine = ['Max', 'Katja', 'Olesja'];
arrNine.pop(); //del last element 'Olesja'
console.log(arrNine);
//You need understand anyone method he change in end array FAST
//Change in begin array SLOW (need more operation for this(min 3(add,change->rename length,refresh length)))


//Delete/add/change specific element
let arrSpecific = ['Vanja', 'Ivan', 'Olja']

delete arrSpecific[1];
console.log(arrSpecific);
console.log(arrSpecific[1]);
console.log(arrSpecific.length);


//Method splice. Can add, del & replace elements.
//Example arr.splice(index[, deleteCount, elem1, ..., elemN])

//Del element
let arrayOne = ['Vanja', 'Ivan', 'Olja'];
console.log(arrayOne);
console.log('start first position (Ivan), del one element');
arrayOne.splice(1, 1);
console.log(arrayOne);

//Delete element and return he in variable
let arrayTwo = ['Vanja', 'Ivan', 'Olja'];
console.log('Delete element and return he in variable');
let removed = arrayTwo.splice(1, 1);
console.log(removed);

//Replace element
let arrayThree = ['Vanja', 'Ivan', 'Olja'];
console.log('start zero position (Vanja) in (Kolja), replace one element');
arrayThree.splice(0, 1, 'Kolja')
console.log(arrayThree);

//Add elemnt
let arrayFour = ['Vanja', 'Ivan', 'Olja'];
console.log('start first position befor (Ivan), add two elements');
arrayFour.splice(1, 0, 'Kolja', 'Masha')
console.log(arrayFour);

//Del elemnt
let arrayFive = ['Vanja', 'Ivan', 'Olja'];
console.log('start last position (Olja), del one element');
arrayFive.splice(-1, 1)
console.log(arrayFive);


//Method slice
//Create new array, in him copy part or all array
//Exaple arr.slice([start], [end]) Not including [end]

//Copy part array
let arraySix = ['Vanja', 'Ivan', 'Olja'];
console.log(arraySix);

//Begin with 1st position 'Ivan'
//to 2st position 'Olja' (not including)
let arraySeven = arraySix.slice (1, 2);
console.log(arraySeven);

//Begin with penultimate position 'Ivan'
//to last position 'Olja' (not including)
let arrayEight = arraySix.slice (-2, -1);
console.log(arrayEight);

//Copy all array
let arrayNine = arraySix.slice();
console.log(arrayNine);


//Method concat
//Create new array, in inside copy data from another array
//and additionally value (in end array)
//Exaple arr.concat(arg1, arg2, arg3, ...)

let arrI = ['Vanja', 'Ivan', 'Olja'];
let arrII = arrI.concat('Petro');
console.log(arrII);