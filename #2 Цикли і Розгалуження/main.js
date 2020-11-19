let numberFirst = +prompt("Type number");
if (numberFirst %2 ==0) {
    console.log("False");
} else {
    console.log("True");
}

let numberSecond = +prompt("Type anoter number");
if (numberSecond %2 ==0) {
    console.log("False");
} else {
    console.log("True");
}

const answerChosen = confirm("Skip primes?") // primes - парні числа
console.log(answerChosen)

let result = 0;
if (!answerChosen) {
    for (numberFirst; numberFirst <= numberSecond; numberFirst++) {
        result+= numberFirst;
    }
    alert(result)
} else {
    for (numberFirst; numberFirst <= numberSecond; numberFirst++) {
        if (numberFirst % 2 == 0) {
            continue;
        }
        else {
            result += numberFirst;
        }
    }
    alert(result)
}