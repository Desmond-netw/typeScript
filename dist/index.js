"use strict";
// creating a typescript for user
const entry = require('prompt-sync')();
//creating user1
let student1 = {
    name: entry('Enter User1 name: '),
    age: parseInt(entry('Age: ')),
    programming: entry(' Are you doing programming: (yes/no) ').toLowerCase() === true,
};
// console.log(student1);
console.log("Your name is", student1.name);
console.log("How old are you?", student1.age);
console.log("You are learning programming ", student1.programming);