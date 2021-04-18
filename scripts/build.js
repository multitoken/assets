const fs = require('fs');
const path = require('path')

const {chains} = require('../data/chains.js');
const {tokens} = require('../data/tokens.js');


const FILE_PATHS = {
    eligible: path.resolve(__dirname, '../assets/eligible.json'),
    tokens: path.resolve(__dirname, '../assets/tokens.json'),
}

const build = () => {
    _buildTokens();
    _buildEligible();
}

const _buildTokens = () => {
    const result = {
        name: 'MultiToken',
        timestamp: (new Date()).toISOString(),
        version: {
            major: 0,
            minor: 1,
            patch: 0,
        },
        keywords: [
            'multitoken',
            'default',
            'list',
        ],
        tokens: [],
    };

    for (let chainName in chains) {
        for (let tokenName in tokens) {
            const token = tokens[tokenName];
            if (!token.addresses[chainName]) {
                continue
            }

            result.tokens.push({
                address: token.addresses[chainName],
                "chainId": chains[chainName],
                "name": tokenName,
                "symbol": token.symbol,
                "decimals": token.decimals,
                "logoURI": `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${token.addresses.main}/logo.png`,
            });
        }
    }

    const json_ = JSON.stringify(result, null, 2)
    fs.writeFileSync(FILE_PATHS.tokens, json_);
}

const _buildEligible = () => {
    const result = {};

    for (let chainName in chains) {
        result[chainName] = {};

        for (let tokenName in tokens) {
            const token = tokens[tokenName];
            if (!token.addresses[chainName]) {
                continue
            }

            result[chainName][token.addresses[chainName]] = token.eligible;
        }
    }

    const json_ = JSON.stringify(result, null, 2)
    fs.writeFileSync(FILE_PATHS.eligible, json_);
}

build();
