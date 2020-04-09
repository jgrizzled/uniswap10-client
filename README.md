# Uniswap10 Client

Front end for Uniswap10 - a customizeable index of cryptocurrencies traded on [Uniswap](https://uniswap.io). Track the top cryptocurrencies on the most popular decentralized exchange.

Uniswap10 is an index representing the hypothetical investment performance of a liquidity-weighted allocation strategy. Get broad exposure to the DeFi ecosystem by following market trends. Customize the strategy parameters to fit your trading style.

<p align="center">
  <img src="https://github.com/jgrizzled/portfolio/raw/master/img/uniswap10-ss-desktop.png" width="350" alt="Uniswap10 screenshot">
</p>

[Live Demo](https://uniswap10.now.sh)

Technologies: React, HTML5, CSS3

[Server Repository](https://github.com/jgrizzled/uniswap10-server)

## Install

`yarn install` or `npm install`

Specify development API URL (defaults to http://localhost:8000):

1. `cp sample.env .env.development`
2. Input development URL

Specify production API URL for local builds:

1. `cp sample.env .env.production`
2. Input production URL

Specify production API URL for Zeit.co:

1. `cp sample.now.json now.json`
2. Input production URL

## Scripts

Develop: `yarn start` or `npm run start`

Build: `yarn build` or `npm run build`

Deploy to Zeit: `yarn deploy` or `npm run deploy`

Test: `yarn test` or `npm run test`
