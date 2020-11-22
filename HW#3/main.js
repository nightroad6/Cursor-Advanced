// 1-ST TASK
const numberType = 345;
const getMaxDigit = number => {
    const splitNumber = number.toString().split('');
    let maxDigit = 0;
    splitNumber.forEach(digit => {
        if(+digit > maxDigit){
            maxDigit = digit;
        }
    });
    return maxDigit;
}

// 2-ND TASK
const numberType2 = 6;
const numberPower = 4;
function toPow(numberType2, numberPower) {
    let result = 1;
    for(let i = 0; i < numberPower; i++) {
        result *= numberType2;
    }
    return result
}

//3-RD TASK
let nameType = "анастасія"
function nameToUpperCase (strType) {
    if(!nameType) return nameType;
    return nameType[0].toUpperCase() + nameType.slice(1)
}

//4-TH TASK
const sallaryType = 12500;
const tax = 19.5;
function mathSallaryWithTax (sallaryType, tax) {
    let result = sallaryType-(sallaryType/100*tax);
    return result
}

//5-TH TASK 
const minNumber = 500;
const maxNumber = 150;
function getRandomNumber (minNumber, maxNumber) {
    return Math.floor(Math.random()*(maxNumber - minNumber +1)) +minNumber;
}

//6-TH TASK 
const word = "coffee";
const letter = "f";
function countLetter (word, letter) {
    let letterCount = 0;
    for (let position = 0; position < word.length; position++) {
        if (word.charAt(position) == letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}

document.writeln(`
<div>Функція №1: ${getMaxDigit(numberType)}</div>
<div>Функція №2: ${toPow(numberType2, numberPower)}</div>
<div>Функція №3: ${nameToUpperCase (nameType)}</div>
<div>Функція №4: ${mathSallaryWithTax(sallaryType, tax)}</div>
<div>Функція №5: ${getRandomNumber (minNumber, maxNumber)}</div>
<div>Функція №6: ${countLetter(word, letter)}</div>`)