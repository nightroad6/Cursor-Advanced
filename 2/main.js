let answerFirst = +prompt("Type number");
if (answerFirst %2 ==0) {
    console.log("False");
} else {
    console.log("True");
}

let answerSecond = +prompt("Type anoter number");
if (answerSecond %2 ==0) {
    console.log("False");
} else {
    console.log("True");
}

const answerChosen = confirm("Primes")
console.log(answerChosen)

let result = 0;
if (!answerChosen) {
    for (answerFirst; answerFirst <= answerSecond; answerFirst++) {
        result+= answerFirst;
    }
    console.log(result)
} else {
    for (answerFirst; answerFirst <= answerSecond; answerFirst++) {
        if (answerFirst % 2 == 0) {
            continue;
        }
        else {
            result += answerFirst;
        }
    }
    console.log(result)
}