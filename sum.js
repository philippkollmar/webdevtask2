function stringCalc(numbers) {

    let input = String(numbers);
    let stringSplit = input.split(',');
    
    
    if(stringSplit.length > 1){
        let addition = 0;
        for(let i = 0; i < stringSplit.length; i++){
            addition = addition + parseInt(stringSplit[i]);
        }
        return addition;
    }
    else {
        let addition = parseInt(stringSplit[0]);
        return addition;
    }

}
const sum = stringCalc()

module.exports = {
    stringCalc
}