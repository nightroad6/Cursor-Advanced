// 1-ST TASK
// const numberType = +(document.getElementById("Please, type number"));
// const getMaxDigit = number => {
//     const splitNumber = number.toString().split('');
//     let maxDigit = 0;
//     splitNumber.forEach(digit => {
//         if(+digit > maxDigit){
//             maxDigit = digit;
//         }
//     });
//     return maxDigit;
// }
// document.writeln(getMaxDigit(numberType));

// 2-ND TASK
// const numberType2 = Number(prompt("Type number"));
// const numberPower = Number(prompt("Type exponent"))

// function toPow(numberType2, numberPower) {
//     let result = 1;
//     for(let i = 0; i < numberPower; i++) {
//         result *= numberType2;
//     }
//     return result
// }
// console.log(toPow(numberType2, numberPower));

//3-RD TASK
// let nameType = prompt("Type your name");
// function nameToUpperCase (strType) {
//     if(!nameType) return nameType;
//     return nameType[0].toUpperCase() + nameType.slice(1)
// }
// console.log(nameToUpperCase (nameType))

//4-TH TASK
// const sallaryType = +prompt("Type your sallary");
// const tax = 19.5;
// function mathSallaryWithTax (sallaryType, tax) {
//     let result = sallaryType-(sallaryType/100*tax);
//     return result
// }
// console.log(mathSallaryWithTax(sallaryType, tax));

//5-TH TASK 
// const minNumber = +prompt("type min number");
// const maxNumber = +prompt("type max number");
// function getRandomNumber (minNumber, maxNumber) {
//     return Math.floor(Math.random()*(maxNumber - minNumber +1)) +minNumber;
// }
// alert(getRandomNumber (minNumber, maxNumber))

//6-TH TASK 
// const word = prompt("Type word");
// const letter = prompt("Type letter");
// function countLetter (word, letter) {
//     let letterCount = 0;
//     for (let position = 0; position < word.length; position++) {
//         if (word.charAt(position) == letter) {
//             letterCount += 1;
//         }
//     }
//     return letterCount;
// }
// alert(countLetter (word, letter));