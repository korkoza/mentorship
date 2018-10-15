Promise.all ([
    new Promise ((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise ((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise ((resolve, reject) => setTimeout(() => resolve(3), 1000))
]).then((results) => {
    console.log(results[0]);
    console.log(results[2]);
})