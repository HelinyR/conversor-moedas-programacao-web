function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = "Coloque um valor valido";
        return;
    }

    let result = 0;


    switch (fromCurrency) {
        case "BRL":
            result = brlTo(toCurrency, amount); 
            break;
        case "USD":
            result = usdTo(toCurrency, amount);
            break;
        case "EUR":
            result = eurTo(toCurrency, amount);
            break;
        case "CNY":
            result = cnyTo(toCurrency, amount);
            break;
        case "ARS":
            result = arsTo(toCurrency, amount);
            break;
        default:
            result = amount;
    }

    document.getElementById('result').innerText = `${amount} ${fromCurrency} equivale a ${result.toFixed(2)} ${toCurrency}`;
}

function brlTo(convertTo, valueFrom) {
    switch (convertTo) {
        case "USD":
            return valueFrom * 0.18;
        case "EUR":
            return valueFrom * 0.16;
        case "CNY":
            return valueFrom * 1.29;
        case "ARS":
            return valueFrom * 165.94;
        default:
            return valueFrom;
    }
}

function usdTo(convertTo, valueFrom) {
    switch (convertTo) {
        case "BRL":
            return valueFrom * 5.50;
        case "EUR":
            return valueFrom * 0.85;
        case "CNY":
            return valueFrom * 7.10;
        case "ARS":
            return valueFrom * 90.00;
        default:
            return valueFrom;
    }
}

function eurTo(convertTo, valueFrom) {
    switch (convertTo) {
        case "BRL":
            return valueFrom * 6.50;
        case "USD":
            return valueFrom * 1.18;
        case "CNY":
            return valueFrom * 8.35;
        case "ARS":
            return valueFrom * 105.00;
        default:
            return valueFrom;
    }
}

function cnyTo(convertTo, valueFrom){
    switch (convertTo) {
        case "BRL":
            return valueFrom * 0.78;
        case "USD":
            return valueFrom * 0.14;
        case "EUR":
            return valueFrom * 0.13;
        case "ARS":
            return valueFrom * 129.16;
        default:
            return valueFrom;
    }
}

function arsTo (convertTo, valueFrom){
    switch (convertTo) {
        case "BRL":
            return valueFrom * 0.0060;
        case "USD":
            return valueFrom * 0.0011;
        case "EUR":
            return valueFrom * 0.00099;
        case "CNY":
            return valueFrom * 0.0077;
        default:
            return valueFrom;
    }
}
