const {stringCalc} = require('./sum');

describe('stringCalc', () => {
    it('should add 1 and 2 = 3', () => {
        
        expect(stringCalc("1,2")).toBe(3);
    })

    it('should return NaN', () => {
        
        expect(stringCalc("")).toBe(NaN);
    })

    it('should return 20', () => {
        
        expect(stringCalc("10,10")).toBe(20);
    })

    it('should return 1', () => {
        
        expect(stringCalc("1")).toBe(1);
    })

})