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

    it('should add 1, 2 and 3 = 6', () => {
        
        expect(stringCalc("1,2,3")).toBe(6);
    })

    it('should add 15, 60 and 87 = 162', () => {
        
        expect(stringCalc("15,60,87")).toBe(162);
    })

    it('should ignore newline', () => {
        
        expect(stringCalc("1\n2,3")).toBe(6);
    })
    it('should ignore newline', () => {
        
        expect(stringCalc("1,\n,2,3")).toBe(6);
    })
})