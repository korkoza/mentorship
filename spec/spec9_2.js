let calc = require('../src/calcApp');

describe ('calculator testing', function(){
    it ('addition', function(){
        expect(calc('+',12,15)).toEqual(27);
    });
    it ('substraction', function(){
        expect(calc('-',12,5)).toEqual(7);
    });
    it ('multiplication', function(){
        expect(calc('*',2,25)).toEqual(50);
    });
    it ('division', function(){
        expect(calc('/',21,7)).toEqual(3);
    });
    it ('addition', function(){
        expect(calc('%',12,8)).toEqual('Unsupported operator has been used');
    });
});