let sunflower = 15.678;
let rose = 123.965;
let lily = 90.2345;
let fund = 500;

const maxPrice = Math.max(sunflower, rose, lily);
const maxPriceName = "Максимальне число";
const minPrice = Math.min(sunflower, rose, lily)
const minPriceName = "Мінімальне число";
const sum = sunflower+rose+lily; 
const sumName = "Сума";
const coins = Math.round(sunflower)+Math.round(rose)+Math.round(lily);
const coinsFloorName = "Сума з округленням в меншу сторону";
const coinsFloor = Math.floor(coins)
const coinsName = "Сума без копійок";
const sumCeil = Math.ceil(coins/100)*100;
const sumCeilName = "Сума округлена до сотень";
const balance = fund - sum;
const avarageValue = sum/3;
const avarageValueCeil = Math.ceil(avarageValue*100)/100;
function getRandom (min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
const sumWithSale = Math.ceil(sum-(sum/100*(getRandom(1, 100))));
// const profit = sum/2-()


console.log (maxPriceName, maxPrice);
console.log (minPriceName, minPrice);
console.log (sumName, sum)
console.log (coinsName, coins, coinsFloorName, coinsFloor);
console.log (sumCeilName, sumCeil);

function par(coinsFloor){
    if(coinsFloor%2 == 0){
      console.log(true);
  } else {
    console.log(false);
  }
  }
 par(coinsFloor);

 console.log("Решта",balance)
 console.log ("Середне значення", avarageValueCeil)
 console.log("Ваша знижка",getRandom(1, 100)+"%");
 console.log("Сума зі знижкою", sumWithSale)
//  console.log("", )
 
 