let digits = {
    0:'zero', 1:'one', 2:'two', 3:'three',  4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine'
}

let firstDozen = {
    10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen'
}

let dozens = {
    2:'twenty', 3:'thirty', 4:'forty', 5:'fifty', 6:'sixty', 7:'seventy', 8:'eighty', 9:'ninety' 
}
module.exports = function toReadable (number) {
    let countTens = Math.trunc(number / 10);
    let countHundreds = Math.trunc(number / 100)
    let remainderOfDivision = number % 10;
    return (countTens == 0) ? digits[number] :
   (countTens == 1) ? firstDozen[number] :
   (countTens <= 9) ? `${dozens[countTens]}${(remainderOfDivision != 0) ? ` ${digits[remainderOfDivision]}` : ''}` :
   (number % 100 != 0) ? `${digits[countHundreds]} hundred ${(Math.trunc((number % 100) / 10) < 1) ? digits[remainderOfDivision] : (Math.trunc((number % 100) / 10) < 2) ? firstDozen[number % 100] : `${dozens[Math.trunc((number % 100) / 10)]}${(remainderOfDivision != 0) ? ` ${digits[remainderOfDivision]}` : ''}`}` :
   `${digits[countHundreds]} hundred`
}
