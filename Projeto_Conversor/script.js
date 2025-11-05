const convertButton = document.querySelector('.convert-button')
const currencySelectFirst = document.querySelector('.currency-select-first')
const currencySelectSecond = document.querySelector('.currency-select-second')

function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')

    const realToday = 1
    const dolarToday = 5.48
    const euroToday = 6.22
    const libraToday = 7.04
    const bitcoinToday = 573384.72

    function formatCurrency(value, currency) {
        switch (currency) {
            case 'real':
                return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
            case 'dolar':
                return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
            case 'euro':
                return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value)
            case 'libra':
                return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value)
            case 'bitcoin':
                return `₿${new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 8,
                    maximumFractionDigits: 8
                }).format(value)}`
        }
    }

    const rates = {
        real: realToday,
        dolar: dolarToday,
        euro: euroToday,
        libra: libraToday,
        bitcoin: bitcoinToday
    }

    const valueInReais = inputCurrencyValue * rates[currencySelectFirst.value]
    const convertedValue = valueInReais / rates[currencySelectSecond.value]

    currencyValueToConvert.innerHTML = formatCurrency(inputCurrencyValue, currencySelectFirst.value)

    currencyValueConverted.innerHTML = formatCurrency(convertedValue, currencySelectSecond.value)
}

function changeCurrency() {
    const currencyNameFirst = document.getElementById('currency-name-first')
    const currencyNameSecond = document.getElementById('currency-name-second')
    const currencyImageFirst = document.querySelector('.currency-img-first')
    const currencyImageSecond = document.querySelector('.currency-img-second')

    const currencyData = {
        real: { name: 'Real', img: './assets/Moeda_Brasil.png' },
        dolar: { name: 'Dólar', img: './assets/Moeda_Dolar.png' },
        euro: { name: 'Euro', img: './assets/Moeda_Euro.png' },
        libra: { name: 'Libra', img: './assets/Moeda_Libra.png' },
        bitcoin: { name: 'Bitcoin', img: './assets/Moeda_Bitcoin.png' }
    }

    const first = currencyData[currencySelectFirst.value]
    const second = currencyData[currencySelectSecond.value]

    currencyNameFirst.innerHTML = first.name
    currencyImageFirst.src = first.img

    currencyNameSecond.innerHTML = second.name
    currencyImageSecond.src = second.img

    convertValues()
}

currencySelectFirst.addEventListener('change', changeCurrency)
currencySelectSecond.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)