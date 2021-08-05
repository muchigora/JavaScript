/**
 * This program converts human age to dog years.
 * The rationale behind the converstions is based the assumption that 
 * the first two years of dog-life are each equivalent to 10.5 years of human 
 * years. Then the rest are of the dog years are 4 years equals 1 year of 
 * human years
 */


//set the age that needs to be converted
const myAge = 10;

//The first two dog- years equivalent to humam years
let earlyYears = 2;
earlyYears *= 10.5;
//console.log(earlyYears);

//Later years of dog-life equated to human years
let laterYears = myAge - 2;
//Converting the remaining human years to dog years
laterYears *= 4;
//console.log(laterYears);

//Age in Dog Years
let myAgeInDogYears = earlyYears + laterYears;
//console.log(myAgeInDogYears);

let myName = 'Muchi'.toLowerCase();
console.log(`My name is ${myName} I am HUMAN ${myAge} years old which is DOG ${myAgeInDogYears} years old in dog years` );