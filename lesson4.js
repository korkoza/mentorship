// task 1

let arr1 = [1,2,3,4,5,6,7,8,9,10,"asdf"];

function lastElem(x){
    return x[x.length-1];
};

console.log(`Task 1. Last element of [${arr1}] is '${lastElem(arr1)}'`);

// task 2

let arr2 = ["a","b","c","d"];
let str2;

str2 = arr2.join('');

console.log(`Task 2. Convert array '${arr2}' into string '${str2}'`);

// task 3

let arr31 = [1,2,3,4,5,6,7,8,9,10];
let arr32 = [10,20,30,40,50,60,70,80,90,100];
let arr33 = [];

for (let i = 0; i < arr31.length; i++){
    arr33[i] = arr31[i] + arr32[i];
};

console.log(`Task 3. Add two arrays - '${arr33}'`);

// task 4.

let rectangle = {
    width: 15,
    height: 5,
    getArea: function(){return this.width * this.height;},
    getPerimeter: function(){return this.width * 2 + this.height * 2;}
};

console.log(`Task 4. Area of rectangle - ${rectangle.getArea()}, Perimeter - ${rectangle.getPerimeter()}`);