const prompt =require('prompt-sync')();
let mass = prompt ("enter your mass in kg");
let height = prompt ("enter your height in meter");
let bmi;
bmi=mass/(Math.pow(height,2));
console.log("your mass is " + bmi.toFixed(2));
