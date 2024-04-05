"use strict";

// to more secure JavaScript code. Also to avoid bags in code

/*

//Demo on string 'use strict'

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive crazily");

*/

/*

//FUNCTIONS
// can be reused/ helps in code re-use

function logger(){
    console.log('My name is David Aboge')
}

// calling / running / invoking a function.
logger();
logger();
logger();

// functions not only help in code reuse as in above but also can
// accept a value and return a result as shown below.

// think of it like a brending machine 



function fruitProcessor(apples, oranges){
console.log(apples, oranges)
const juice = `Juice made with ${apples} apples and ${oranges} oranges`

return juice;

}

fruitProcessor(5, 0)

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// console.log(fruitProcessor(5, 0));


const   appleOrangeJuice = fruitProcessor(3, 9)
console.log(appleOrangeJuice)

*/

/*
//Function decleration and function expression

//function declearation, called before definition

function calcAge1(birthYear){
    
    return 2037 - birthYear;
}

const age1 = calcAge1(1993)
console.log(age1)


//expression function.
const calcAge2 = function(birthYear){
    return 2037 - birthYear
}

const age2 = calcAge2(1993)

console.log(age2)

// Note: functions are values that can be stored in a variable.

*/

/*

//Arrow functions:shorter and faster to write from ES6
//return is explicit

const calcAge3 = birthYear => 2037 - birthYear;// return is implicit.
const age3 = calcAge3(1990)
console.log(age3)

const yearsUntillTetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement; // return explicitly for code block.
}

console.log(yearsUntillTetirement(1990))

*/

/*
//Function calling other functions

const cutPieces = function(fruit){

    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    
    const applePieces = cutPieces(apples)
    const oragePieces = cutPieces(oranges)

    const juice = `Juice made with ${applePieces} apples pieces and ${oragePieces} oranges pieces`
    
    return juice;
    
    }

    console.log(fruitProcessor(2, 3))

    //Function Review.

*/

/*

const calcAverage = (score1, score2, score3) =>
  (score1 + score2 + score3) / calcAverage.length;

const scoreDolphines = calcAverage(30, 30, 30);
const scoreKoalas = calcAverage(60, 60, 60);

console.log(scoreKoalas);

const checkWinner = function (avgDolphines, avgKoalas) {
  if (avgDolphines >= avgKoalas * 2) {
    console.log(`Dolpines win (${avgDolphines} vs ${avgKoalas})`);
  } else if (avgKoalas <= avgDolphines * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphines})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphines, scoreKoalas);

*/

/*

// First Data structure: Arrays

// for storing, then process then take it somewhare else.

// Most important data structures are arrays and objects.

const friend1 = 'David';
const friend2 = 'Dan'
const friend3 = 'Michael'

const friends = ['David', 'Dan', 'Michael']
console.log(friends)

console.log(friends[0])
console.log(friends[2])

console.log(friends.length)// length is property

console.log(friends[friends.length - 1]) // friends.length - 1 is an expression

friends[2] = 'Peter' // arrays are immutable unlike primitive types
console.log(friends)

//one cant replace the entire array e.g.
// friends = ['Ken', 'Jakes'] 

// Arrays can hold elements of different types. e.g

const david = ['David', 'Aboge', 2059 - 2010, 'Coder', friends];

console.log(david)

/////////////////////Test

const years = [1990, 1978,1960,1979,1900]

const calcAge = function(birthYear){

    return 2080 - birthYear;
    
}

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

console.log(ages)


*/

/*

//Basic array operations (Methods);
//add element
const friends = ["David", "Dan", "Michael"];
const newLength = friends.push("Jay"); // push also returns array length

console.log(newLength);

console.log(friends);

friends.unshift("John");
console.log(friends);

//Remove elements

friends.pop(); //last // returns removed element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

//position of an element.
console.log(friends.indexOf("Dan"));

console.log(friends.includes("Dan"));
console.log(friends.includes('Davy')) // includes method works with strick, we can wright conditions using it e.g

if(friends.includes('Dan')){

  console.log('You have a friend called Dan')

}



*/

/*

//intro to Objects...another data structure in js.

//the order does not matter when retrieving objects

//Dot Vs Bracket Notation.


const david = {
  firstName: "David",
  lastName: "Aboge",
  age: 2056 - 1970,
  job: "Developer",
  friends: ["Dan", "John", "Ken", "Emma"],
};

console.log(david);

//object property retrieval.
console.log(david.lastName);
console.log(david["firstName"]); // in this an expression can be added in the brackets.

const nameKey = "Name";
console.log(david["first" + nameKey]);
console.log(david["last" + nameKey]); // an expression added to the bracket when retrieving its content.

const personsInterest = prompt(
  "What would you like to know about David, choose firsName,lastName,job,age, and, friends"
);
console.log(personsInterest);
console.log(david[personsInterest]);

if (david[personsInterest]) {
  console.log(`Yes he is ${david[personsInterest]}`);
} else {
  console.log("Wrong request, please choose firsName,lastName,job,age, and, friends ");
}


// adding property to an object.

david.location = 'Nairobi'
david['email'] = 'davidopondoaboge@gmail.com'
console.log(david);

// assignment: writing a sentence in a dynamic way.

// David has 3 friends, and his best friend is called Emma

console.log(`${david.firstName}, has ${david.friends.length} and his best friend is ${david.friends[3]}`)

*/

// Object methods.

// const david = {
//   firstName: "David",
//   lastName: "Aboge",
//   birthYear: 1970,
//   job: "Developer",
//   friends: ["Dan", "John", "Ken", "Emma"],
//   hasDrivingLicence: true,

//   calcAge: function () {
//     // console.log(this)

//     this.age = 2056 - this.birthYear;

//     return this.age;
//   },

//   getSmmery: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       david.job
//     } and he ${this.hasDrivingLicence ? "a" : "no"} driver's licence`;
//   },
// };

// console.log(david.getSmmery());

// console.log(david.age);
// console.log(david.age);
// console.log(david.age);
// console.log(david.age);

// david.calcAge();

// console.log(david['calcAge'](1990));

//challange
// 'David is a 86 year old Developer'

// console.log( `${david.firstName} is a ${david.age} year old ${david.job}, and has a driver licence`)

/*

const mark = {
     
  fullName: 'Mark Miller',
   massMark: 78,
   heightMark: 1.69, 
   
   calcBMI: function(){
       
      const bmi = this.massMark / (this.heightMark * this.heightMark);
      
       return  bmi;
   }
   
};

const john = {
  
  fullName: 'John Smith',
   massJohn: 92,
   heightJohn: 1.95, 
   
   calcBMI: function(){
       
       const bmi = this.massJohn / (this.heightJohn * this.heightJohn);
       
       return  bmi;
   }
   
};

if(mark.calcBMI > john.calcBMI){
  
  console.log(`${mark.fullName} BMI ${mark.calcBMI()} is higher than ${john.fullName} ${john.calcBMI()}`);
  
} else{
      
      console.log(`{john.fullName} BMI (${john.calcBMI()}) is higher than ${mark.fullName} ${mark.calcBMI()}`);
  }
  
  */

/*
// Loop

for (let rep = 1; rep <= 100; rep++) {
  console.log(`Push ups repetition ${rep}`);
}

*/

/*

//Looping Arrays, Breaking and Continuing

const types = [];
const david = [
  'David',
  'Aboge',
  2037 - 1989,
  'Coder',
  ['Michael', 'Peter', 'Steven'],

  true
]

for(let i=0;i < david.length ;i++){

  //reading array elements
  // console.log(david[i], typeof david[i])

  //filling array types

  // types[i] =  typeof david[i]

  types.push(typeof david[i])
}

// console.log(types)


const friends1 =  ['Michael', 'Peter', 'Steven', 'Dan'];


const years = [1990, 2007, 1969, 2020]
const ages = [];

for(let i = 0; i < years.length; i++){
  
  const currentYear = 2030;

  // console.log(`${friends1[i]} is ${currentYear - years[i]} years old`)

  ages.push(currentYear - years[i])
}

console.log(ages);

//continue and break


for(let i=0;i < david.length ;i++){

  if(typeof david[i] !== 'string') continue;

  types.push(typeof david[i])

  // console.log(david[i], types[i])
}



for(let i=0;i < david.length ;i++){

  if(typeof david[i] === 'number') break;

  types.push(typeof david[i])

  console.log(david[i], types[i])
}

*/
/*
const questions = [

  {
    question: 'What is the capital city of Kenya',
   
    answers: [
      {text:'Mombasa', correct:false},
      {text:'Nairobi', correct:true},
      {text:'Kisumu',  correct:false},
      {text: 'Nakuru', correct:false}
    ]
  },

  {
    question: 'Which of the folling is not an African country',
   
    answers: [
      {text:'Somalia', correct:false},
      {text:'Ghana', correct:false},
      {text:'France',  correct:true},
      {text: 'Ethiopia', correct:false}
    ]

  },

  {

    question: 'Who is the President of Kenya',
   
    answers: [
      {text:'Sifuna', correct:false},
      {text:'RGY', correct:true},
      {text:'Sudi',  correct:false},
      {text: 'Ruto', correct:true}
    ]

  }
]

*/

/*

//Looping Backwards and Loops in Loops

const david = [
  "David",
  "Aboge",
  2037 - 1989,
  "Coder",
  ["Michael", "Peter", "Steven"],
  true
];

for (let i = david.length - 1; i >= 0; i--) {

  // console.log(i, david[i]);

} 

for(let exercise = 1; exercise < 4; exercise++){
  console.log(`----------Starting exercise ${exercise}`)

  for(let rep = 1; rep < 6; rep++){

    console.log(`Exercise ${exercise}: Push ups repetition ${rep}`)
  }
}

*/

/*

//The while loop.
// let rep = 1

// while(rep <= 10){
//   // console.log(`Push ups repetition ${rep}`)

//   rep++
// }

let dice = Math.trunc(Math.random() * 6) + 1

// console.log(dice)

while(dice !== 6){

  console.log(`You roled the ${dice} face of the dice`)

  dice = Math.trunc(Math.random() * 6) + 1  

  if(dice === 6) console.log(`Loop ended`)
}
*/

/*
const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

const calcTip = function (bill){

for(let i = 0; i < bills.length; i++){
  tips.push(bill[i] >=50 && bill[i] <= 300 ? bill[i] * 0.15 : bill[i] * 0.2)
  totals.push(tips[i] + bill[i])

}
console.log(bill)
console.log(tips);
console.log(totals);

}
calcTip(bills)





console.log('Average calculation')

const marks = [2, 3, 6];


const calcAverage = function(arr){

 let sumMarks = 0;

 let averageMarks  = 0;

  for(let i = 0; i < arr.length; i++){

  sumMarks += arr[i]

   averageMarks = sumMarks/arr.length

  }

  // console.log(sumMarks);console.log(`The average marks is ${calcAverage(2,3,6)}`)
  
  return averageMarks

 
}

console.log(`The average marks is ${calcAverage(totals)}`)
console.log(`The average marks is ${calcAverage(tips)}`)

*/
