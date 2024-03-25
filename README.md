# Currency Exchange Rate (CCR) Package

[![npm version](https://badge.fury.io/js/currency-converter-rate.svg)](https://badge.fury.io/js/currency-converter-rate)

This package provides a simple interface to fetch real-time currency exchange rates from Google search results.

## Installation

You can install the package using npm:

```bash
npm install currency-converter-rate
```

## Usage

```javascript
const { CCR } = require('currency-converter-rate');

async function getExchangeRate(fromCurrency, toCurrency, decimalPlaces) {
  try {
    const rate = await CCR({ fromCurrency, toCurrency, decimalPlaces });
    console.log(`1 ${from} is equal to ${rate} ${to}`);
  } catch (error) {
    console.error('Failed to get exchange rate:', error);
  }
}

getExchangeRate('USD', 'EUR', 2);
```

## API

### `CCR({ from: string, to: string, afterDecimal?: number }): Promise<number>`

- `from`: The currency code to convert from (e.g., 'USD').
- `to`: The currency code to convert to (e.g., 'EUR').
- `afterDecimal`: (Optional) The number of decimal places to round the exchange rate to. Default is 2.

Returns: A `Promise` that resolves to the exchange rate as a `number`.

## Keywords

- currency
- exchange
- rate
- converter
- currency-converter
- currency-exchange
- real-time
- google-search

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.