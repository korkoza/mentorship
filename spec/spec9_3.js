let compare = require('e:/Projects/mentorship/src/compare.js');

describe ('comparison testing', function(){
    it ('first number equals 50', function(){
        expect(compare(50,15)).toEqual(true);
    });
    it ('second number equals 50', function(){
        expect(compare(62,50)).toEqual(true);
    });
    it ('sum of them equal 50', function(){
        expect(compare(12,38)).toEqual(true);
    });
    it ('none of them nor sum doesn\'t equal 50 ', function(){
        expect(compare(21,7)).toBeUndefined();
    });
});