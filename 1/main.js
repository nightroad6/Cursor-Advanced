let sunflower = 15.678;
let rose = 123.965;
let lily = 90.2345;
let fund = 500;

const maxPrice = Math.max(sunflower, rose, lily);
const minPrice = Math.min(sunflower, rose, lily)
const sum = sunflower+rose+lily; 
const coins = Math.round(sunflower)+Math.round(rose)+Math.round(lily);
const coinsFloor = Math.floor(coins)
const sumCeil = Math.ceil(coins/100)*100;
const balance = fund - sum;
const avarageValue = sum/3;
const avarageValueCeil = Math.ceil(avarageValue*100)/100;
let randSale = (Math.random() * (99 - 1) + 1).toFixed(0);
const priceWithSale = sum.toFixed(2) - (sum.toFixed(2) / 100 * randSale);
const sallary = ((sum / 2)- (sum / 100 * randSale)).toFixed(2);

console.log ("Максимальне число", maxPrice);
console.log ("Мінімальне число", minPrice);
console.log ("Сума", sum)
console.log ("Сума з округленням в меншу сторону", coinsFloor);
console.log ("Сума без копійок", coins);
console.log ("Сума округлена до сотень", sumCeil);

function par(coinsFloor){
    if(coinsFloor%2 == 0){
      console.log(true);
  } else {
    console.log(false);
  }
  }
 par(coinsFloor);

 console.log("Решта",balance)
 console.log("Середне значення", avarageValueCeil)
 console.log("Знижка", randSale+"%")
 console.log("Сума зі знижкою", priceWithSale.toFixed(2));
 console.log("Прибуток",sallary)

 