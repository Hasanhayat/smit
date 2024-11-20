var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7, 10],
    disCount: 0.80
};
var plan2 = {
    name: "Advance",
    price: 5.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7, 10],
    disCount: 0.75
};
var plan3 = {
    name: "Ultimate",
    price: 8.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7, 10],
    disCount: 0.70
};


const calculate = (plan) => {
    let price = plan.price;
    let current = new Date();
    let currenMonth = current.getMonth();
    for (let i = 0; i < plan.discountMonths.length; i++) {
        if (plan.discountMonths[i] == currenMonth) {
            price = price * plan.disCount;
        }
    }
    return price * 12;

}
console.log(calculate(plan3));