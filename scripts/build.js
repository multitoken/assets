const fs = require('fs');
const path = require('path');

const chains = require('../data/chains.js');
const tokensETH = require('../data/tokens-eth.js');
const tokensBSC = require('../data/tokens-bsc.js');
const tokensPolygon = require('../data/tokens-polygon.js');
const tokens = tokensETH.concat(tokensBSC).concat(tokensPolygon);

const FILE_PATHS = {
    eligible: path.resolve(__dirname, '../assets/eligible.json'),
    tokens: path.resolve(__dirname, '../assets/tokens.json'),
};

const build = () => {
    _buildTokens();
    _buildEligible();
};

const _buildTokens = () => {
    const result = {
        name: 'MultiToken',
        timestamp: new Date().toISOString(),
        version: {
            major: 0,
            minor: 1,
            patch: 0,
        },
        keywords: ['multitoken', 'default', 'list'],
        tokens: [],
    };

    for (let chain of chains) {
        for (let token of tokens) {
            if (!token.addresses[chain.name]) {
                continue;
            }

            const logoURI = token.logoURI
                ? token.logoURI
                : `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${token.addresses.main}/logo.png`;

            result.tokens.push({
                address: token.addresses[chain.name],
                chainId: chain.id,
                name: token.name,
                symbol: token.symbol,
                decimals: token.decimals,
                logoURI: logoURI,
            });
        }
    }

    const json_ = JSON.stringify(result, null, 4);
    fs.writeFileSync(FILE_PATHS.tokens, json_);
};

const _buildEligible = () => {
    const result = {};

    for (let chain of chains) {
        result[chain.name] = {};

        for (let token of tokens) {
            if (!token.addresses[chain.name]) {
                continue;
            }

            result[chain.name][token.addresses[chain.name]] = token.eligible;
        }
    }

    const json_ = JSON.stringify(result, null, 4);
    fs.writeFileSync(FILE_PATHS.eligible, json_);
};

build();
