# Uniswap10 Client

Front end for Uniswap10 - a customizeable index of liquid cryptoasets traded on [Uniswap](https://uniswap.io).

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
