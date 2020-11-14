const sunflowerPrice = 15.678; //соняшник
const rosePrice = 123.965;
const lilyPrice = 90.2345;
const cash = 500;
const maxPrice = Math.max(sunflowerPrice, rosePrice, lilyPrice);
const minPrice = Math.min(sunflowerPrice, rosePrice, lilyPrice)
const totalSum = sunflowerPrice+rosePrice+lilyPrice; 
const coins = Math.round(sunflowerPrice)+Math.round(rosePrice)+Math.round(lilyPrice);
const coinsFloor = Math.floor(coins)
const sumCeil = Math.ceil(coins/100)*100;
const balance = cash - totalSum;
const avarageValue = totalSum/3;
const avarageValueCeil = Math.ceil(avarageValue*100)/100;
const max = 100;
const min = 1;
const discount = Math.floor(Math.random () * (max - min +1))+min
const sumWithDiscount = Math.floor((totalSum - (totalSum/100*discount))*100)/100
const sallary = Math.floor(((totalSum/2)-(totalSum/100*discount))*100)/100;
const evenNumber = coinsFloor% 2 == 0;
console.log ("Максимальне число", maxPrice);
console.log ("Мінімальне число", minPrice);
console.log ("Сума", totalSum)
console.log ("Сума з округленням в меншу сторону", coinsFloor);
console.log ("Сума без копійок", coins);
console.log ("Сума округлена до сотень", sumCeil);
console.log("Парне число",evenNumber) 
console.log("Решта",balance)
console.log("Середне значення", avarageValueCeil)
console.log("Знижка", discount+"%");
console.log("Сума зі знижкою", sumWithDiscount);
console.log("Прибуток",sallary)

 