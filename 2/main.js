const answerFirst = +prompt("Type number");
if (answerFirst %2 ==0) {
    console.log("False")
} else {
    console.log("True");
}

const answerSecond = +prompt("Type anoter number");
if (answerSecond %2 ==0) {
    console.log("False")
} else {
    console.log("True");
}

const answerChosen = confirm("Primes")
console.log(answerChosen)

const result = prompt("Result");
do {
    result = answerFirst+answerSecond;
} 
while (answerChosen == true) {
    if(answerFirst && answerSecond )) {
        console.log(result)
    }
}   else() {
    console.log(result)
}


// const result = answerFirst+answerSecond;
// do {
//     result = prompt("Result")
// } while (
//     if(answerChosen == true) {
//         console.log(result)
//     } else {
//         console.log(result)
//     }
// 