
let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateUSA = 4.41;
let rateEuro = 4.64;
let rateGBP = 5.47;

formElement.addEventListener("submit", (event) => {

    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;
    let waluta;

    switch (currency) {

        case "USA":
            result = amount / rateUSA;
            waluta = "$"
            break;

        case "EUR":
            result = amount / rateEuro;
            waluta = "€"
            break;

        case "GBP":
            result = amount / rateGBP;
            waluta = "£"
            break;
    }

    resultElement.innerText = `${amount.toFixed(2)} PLN= ${result.toFixed(2)} ${waluta} `;

});

