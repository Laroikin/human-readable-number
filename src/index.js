function lazy(num){
    switch (num){
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
    }
}
function lazy_teens(num){
    switch (num){
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 19:
            return "nineteen";
    }
}
function lazy_tens(num){
    switch (num){
        case 2:
            return "twenty";
        case 3:
            return "thirty";
        case 4:
            return "forty";
        case 5:
            return "fifty";
        case 6:
            return "sixty";
        case 7:
            return "seventy";
        case 8:
            return "eighty";
        case 9:
            return "ninety";
    }
}


module.exports = function toReadable (number) {
    let str = '';
    if(number == 0) return "zero";
    if (number >= 100) str += lazy(parseInt(number/100)) + " hundred";
    if (number >= 10 && parseInt(number%100/10) != 0 && number >= 100) str += (parseInt(number%100/10) < 2) ? " " + lazy_teens(parseInt(number%100)) : " " + lazy_tens(parseInt(number%100/10));
    if (number >= 10 && parseInt(number%100/10) != 0 && number < 100) str += (parseInt(number%100/10) < 2) ? lazy_teens(parseInt(number%100)) : lazy_tens(parseInt(number%100/10));
    if(number >= 10 && number%100%10 != 0 && parseInt(number%100/10) > 1) str += " " + lazy(parseInt(number%100%10));
    if(number < 10) str += lazy(number);
    if(number >= 100 && parseInt(number%100/10) == 0 && number%100%10 != 0) str += " " + lazy(number%100%10);
    return str;
}