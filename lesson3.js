// task 1

let str1 = 'abc de fg hi';
let char1 = 'g';

if (str1.search(char1) >= 0) {
    console.log(`Task 1. Given string '${str1}' contains '${char1}'`)
} else {
    console.log(`Task 1. Given string '${str1}' doesn't contain '${char1}'`)
};


// task 2

let str2 = "   ";

function empty(string){
let x;
let result = 'empty';

for (x in string) {
    if (string[x] !== ' ') {
        result = 'not empty';
        break;
    } 
}
console.log(`Task 2. Given string '${string}' is ${result}`);
}

empty(str2);

// task 2 REG exp
let patt;
let str21 = "       f     ";
let result21;
let result22;

patt = /\s/g;
result21 = str21.match(patt);

if (str21 !== '' && result21.length !== str21.length) {
    console.log(`Task 21. Given string '${str21}' is not empty`);
} else {
    console.log(`Task 21. Given string '${str21}' is empty`);
}


// task 3

function abbrev(string){
    let ind;
    let fName;
    let lName;
    fName = string[0];
    ind = string.search(" ") + 1;
    lName = string[ind];
return (`${fName.toUpperCase()}.${lName.toUpperCase()}.`);    
}

console.log("Task 3. Abbreviation of full name: " + abbrev('mykola korkoza'));

// task 4 

function biggerInt(a,b) {
    if (a > b) {
        console.log(`Task 4. ${a} is bigger tnen ${b}`)
        } else if (a < b)  {
            console.log(`Task 4. ${b} is bigger tnen ${a}`)        
        } else {
                console.log(`Task 4. ${a} equals ${b}`)        
        };
}

biggerInt(45,48);

// task 5
let s1;
let s2;
let s3;

function sort(a,b,c){
    if ((a > b) && (a > c)) {
        s1 = a;
        if (b > c) {
            s2 = b;
            s3 = c;
        } else {
            s2 = c;
            s3 = b;
        }
    } else if ((b > a) && (b > c)) {
        s1 = b;
        if (a > c) {
            s2 = a;
            s3 = c;
        } else {
            s2 = c;
            s3 = a;
        }
    } else {
        s1 = c;
        if (a > b) {
            s2 = a;
            s3 = b;
        } else {
            s2 = b;
            s3 = a;
        }
    } 
    console.log(`Task 5.1. Sort 3 numbers: ${s1}, ${s2}, ${s3}`);
    }

    sort (111,-11,11);


    // sort v2

    let r1;
    let r2;
    let r3;

function sort2(a,b,c){
    if (a > b && a > c) {
        r1 = a;
        if (b > c) {
            r2 = b;
            r3 = c;
        } else {
            r2 = c;
            r3 = b;
        }
    } else if (b > a && b > c) {
        r1 = b;
        if (a > c) {
            r2 = a;
            r3 = c;
        } else {
            r2 = c;
            r3 = a;
        }
    } else {
        r1 = c;
        if (a > b) {
            r2 = a;
            r3 = b;
        } else {
            r2 = b;
            r3 = a;
        }
    } 
    console.log(`Task 5.2. Sort 3 numbers: ${r1}, ${r2}, ${r3}`);
}

sort2(12,6,17)

