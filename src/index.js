module.exports = function toReadable (number) {

    const arraySingleDigits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 
    const arrayTeenDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arrayTens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];   
    const bigNumbers = ['hundred'];
    const array = String(number).split('').reverse();
    
    let result = '';
    if (number === 0) return 'zero';
    for (i = 0; i < array.length; i++) {
                  if (i === 0) {
            result = `${result} ${arraySingleDigits[array[i]]}`;
          }
        if(i === 1) {
                   if (Number(array[1]) !== 1) {
            result = `${result} ${arrayTens[array[i]]}`;
            } else {
                result = `${arrayTeenDigits[array[i-1]]}`;
            }
        } 
             else if (i === 2) {
            result = `${result} ${bigNumbers[0]} ${arraySingleDigits[array[i]]}`;
                        }
                      }
            return result.split(' ').reverse().join(' ').replace(/\s+/g, ' ').trim();
              }



