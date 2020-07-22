//Enter information
let name = prompt('Enter your name');
let place = prompt('Name a place');
let color = prompt('What is your favorite color?');
let verb = prompt('Enter a verb');
let city = prompt('A city');
let tv = prompt('Favorite tv show');
//Enter numbers
let num = Number(prompt('Enter any number')) + 2;
let numTwo = Number(prompt('Enter a number between 1 and 10')) + 4;
let numThree = Number(prompt('Enter any number below 50')) + 5;
let madlibs = 'My name is ' + name + '. I am ' + numThree + ' years old. I live in a ' + place + ' that is ' + color + '. When I am home I like to watch my favorite show, ' + tv + '! ' + num + ' times a day! Once I am done watching tv, I like to ' + verb + ' while eating ' + numTwo + ' bowls of cereal in ' + city;
console.log(madlibs);