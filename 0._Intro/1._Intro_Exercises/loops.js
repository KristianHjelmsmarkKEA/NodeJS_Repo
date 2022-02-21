const smartPhones = [
    { brand: "Samsung", price: 4500},
    { brand: "iPhone", price: 7200},
    { brand: "Sony Experia", price: 3800},
    
];

const discountedPhones = smartPhones.map(smartPhones => {
    smartPhones.price -= 500;
    return smartPhones;
})

console.log(discountedPhones);

const tooExpensivePhones = smartPhones.filter(smartPhones => smartPhones.price <= 4000);

console.log(tooExpensivePhones);