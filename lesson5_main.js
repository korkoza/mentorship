let fs = require('fs');
let ranstring = require('randomstring');

let Car = require ('./lesson5_car');
let Truck = require ('./lesson5_truck');

let luaz = new Car("volyn-968",1986,90);
let kraz = new Truck("mmm",2016,110);

luaz.transportPeople();
luaz.displayInfo();
kraz.transportContainer();
kraz.displayInfo();

// task 3. static method

try {
    luaz.staticMethod();
}
catch(error) {
    console.log("task 3. \nstatic method can't be used with instances");    
}

// task 2. static method

Car.staticMethod();

// task 3. call method of parent's class

luaz.parent();

// task 4. overriden method
luaz.optSpeed();


// task 8
fs.writeFile('firstFile.txt',ranstring.generate(), function (err) {
    if (err) throw err;
    console.log('task 8. \nRandom string has been saved');
});

