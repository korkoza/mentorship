let sum = require('../src/sum');

describe ('sum', function(){
    it ('sum of integers', function(){
        expect(sum(19,11)).toEqual(30, 'custom error message provided'); // ?????????
    });
});