let rateVAT = 0.07;

const logNum = () => {
    let carValue = 1000;
    let VAT = carValue * rateVAT;
    return carValue + VAT
};
console.log(logNum());
