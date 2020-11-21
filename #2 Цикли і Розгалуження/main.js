let numberFirst
let numberSecond

do {
    numberFirst = Number(prompt("Type integer number"));
} while (!Number.isInteger(numberFirst));

do {
    numberSecond = Number(prompt("Type integer number"));
} while (!Number.isInteger(numberSecond));

const answerChosen = confirm("Skip primes?") // primes - парні числа

let result = 0;
for (let i = numberFirst; i <= numberSecond; i++) {
    if (answerChosen && i % 2 === 0) {
        continue;
    }
    result = result + i;
}
alert(result)
