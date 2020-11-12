let sunflower = 15.678;
let rose = 123.965;
let lily = 90.2345;

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
const sumCeil = Math.ceil(sum);
const sumCeilName = "Сума округлена до сотень";




console.log (maxPriceName, maxPrice);
console.log (minPriceName, minPrice);
console.log (sumName, sum)
console.log (coinsName, coins, coinsFloorName, coinsFloor);
console.log (sumCeilName, sumCeil);