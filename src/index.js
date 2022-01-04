module.exports = function toReadable (number) {
    
    const array = String(number).split('').reverse();
    const arraySingleDigits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 
    const arrayTeenDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arrayTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];   
    const bigNumbers = ['hundred'];
    
    let result = '';
    if (number === 0) return 'zero';
    for (i = 0; i < array.length; i++) {
        if (i === 0) {
            result = `${result} ${arraySingleDigits[array[i]]}`;
            }
        else if(i === 1) {
            if (array[1] != 1) {
                result = `${result} ${arrayTens[array[i]]}`;
            }else{
                result = `${arrayTeenDigits[array[i-1]]}`;
            }
        } 
        else if (i === 2) {
            result = `${result} ${bigNumbers[0]} ${arraySingleDigits[array[i]]}`;
            }
        }
        return result.split(' ').reverse().join(' ').replace(/\s+/g, ' ').trim();
        }



