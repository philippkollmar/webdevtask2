function stringCalc(numbers) {

    let input = String(numbers);
    let stringSplit = input.split(/[\n,;_]+/);


    if (stringSplit.length > 1) {
        let addition = 0;
        let parsedInput;

        for (let i = 0; i < stringSplit.length; i++) {
            parsedInput = parseInt(stringSplit[i])
            addition = addition + parsedInput;

            if (parsedInput < 0) {
                break;
            }

            if (parsedInput >= 1000) {
                addition = addition - parsedInput;
            }
        }
        if (parsedInput < 0) {
            return 'negatives not allowed'
        }
        else {
            return addition;
        }
    }
    else {
        let addition = parseInt(stringSplit[0]);
        return addition;
    }

}

module.exports = {
    stringCalc
}