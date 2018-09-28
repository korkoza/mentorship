// task 1

let int1 = 13;
let int2 = 25;

console.log(`Task 1. Sum of two given integers using backtick: ${int1 + int2}`);

// task 2

let string = "Environment"
let newString = "Test_" + string;

console.log(`Task 2. Add 'Test_' in front of givent string: ${newString}`);

// task 3

let person = {
    firstName: "Mykola",
    lastName: "Korkoza",
    age: 31
};

let personInfo = person.firstName + " " + person.lastName + ", " + person.age;

console.log(`Task 3. Combine and print first, last names and age: ${personInfo}`);

// task 4

let int4 = 99;
let result;

if (int4 > 100) result = "is bigger then"
    else if (int4
     < 100) result = "is less then"
        else result = "equals to";

console.log (`Task 4. Compare given intger to 100: ${int4} ${result} 100`);

// task 5

let int51 = 109;
let int52 = 112;
let result5;
if (int51 > int52) result5 = "first number is bigger"
    else result5 = "second number is bigger";

console.log(`Task 5. Compare two given numbers: ${result5}`);

// task 6

let int61 = 5;
let int62 = 50;
let result6;

result6 = ((int61 == 50) || (int62 == 50) || ((int61 + int62) == 50));

console.log(`Task 6. Check two given numbers whether one of them or their sum equals 50: ${result6}`);

// task 7

let int7 = 33;

result7 = ((int7 % 3 == 0) || (int7 % 7 == 0));

console.log(`Task 7. Check whether given number is multiple of 3 of 7: ${result7}`);


