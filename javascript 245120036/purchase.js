let purchase = 30000;
let discount = 0;

if (purchase < 5000) {
    discount = 0;
} 
else if (purchase >= 5000 && purchase <= 10000) {
    discount = 10;
} 
else if (purchase > 10000 && purchase <= 25000) {
    discount = 15;
} 
else if (purchase > 25000 && purchase <= 50000) {
    discount = 20;
} 
else {
    discount = 30;
}

let finalAmount = purchase - (purchase * discount / 100);

console.log("Purchase Amount: rs" + purchase);
console.log("Discount: " + discount + "%");
console.log("Final Amount: rs" + finalAmount);


