{
    const calculate = (currency, amount) => {

        const rateUSD = 4.41;
        const rateEuro = 4.64;
        const rateGBP = 5.47;

        switch (currency) {

            case "USD":
                return (amount / rateUSD);

            case "EUR":
                return (amount / rateEuro);

            case "GBP":
                return (amount / rateGBP);
        }

    }

    const init = () => {

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");

        let amount =+ amountElement.value;
        let currency = currencyElement.value;
        let result = calculate(currency, amount);
        let waluta = currencySign(currency);

        resultElement.innerText = `${amount.toFixed(2)} PLN= ${result.toFixed(2)} ${waluta} `;

    }

    const currencySign = (currency) => {

        if (currency == "USD") return "$"
        else if (currency == "EUR") return "€"
        else return "£"
    }

    const formElement = document.querySelector(".js-form");
    
    formElement.addEventListener("submit", (event) => {
        
        event.preventDefault();
        
        init();
    });

}