const tokens = {
    'Aave': {
        addresses: {
            main: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
            kovan: '0x41Adb6b4933fa6B4e0457e14b1A24ca14a715a6E',
        },
        symbol: 'AAVE',
        decimals: 18,
        eligible: 'cap3',
    },
    'Basic Attention Token': {
        addresses: {
            main: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
            kovan: '0x78d0CB5Ec5144bD05eE3Ea26c5E7c9f04cF96d19',
        },
        symbol: 'BAT',
        decimals: 18,
        eligible: 'cap3',
    },
    'Binance USD': {
        addresses: {
            main: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
            kovan: '0x21Cd6d64709685EfC92499fEd437826A5d879a1b',
        },
        symbol: 'BUSD',
        decimals: 18,
        eligible: 'cap3',
    },
    'Chainlink': {
        addresses: {
            main: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
            kovan: '0x373986e90d88c943803b30120914f0f2241859fc',
        },
        symbol: 'LINK',
        decimals: 18,
        eligible: 'cap3',
    },
    'Chiliz': {
        addresses: {
            main: '0x3506424F91fD33084466F402d5D97f05F8e3b4AF',
            kovan: '0xfB5cb21B25473AfA18dC890A037C037726D987A3',
        },
        symbol: 'CHZ',
        decimals: 18,
        eligible: 'cap3',
    },
    'Compound': {
        addresses: {
            main: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
            kovan: '0x77398D01662a154C38Cf1150f593B049cEc94A31',
        },
        symbol: 'COMP',
        decimals: 18,
        eligible: 'cap3',
    },
    'Crypto.com Coin': {
        addresses: {
            main: '0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b',
            kovan: '0xEDb31f0E1a16b557b67E1ed8288EBdD5B09EaeDD',
        },
        symbol: 'CRO',
        decimals: 8,
        eligible: 'cap3',
    },
    'Dai': {
        addresses: {
            main: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            kovan: '0x5a155D76774e8a1948c87652b3FCfD80655c00D7',
        },
        symbol: 'DAI',
        decimals: 18,
        eligible: 'cap3',
    },
    'Decentraland': {
        addresses: {
            main: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
            kovan: '0xE807CC2EFb8A1C133c893712237d940041b95B83',
        },
        symbol: 'MANA',
        decimals: 18,
        eligible: 'cap3',
    },
    'FTX Token': {
        addresses: {
            main: '0x50D1c9771902476076eCFc8B2A83Ad6b9355a4c9',
            kovan: '0xC28F74a38F99d4EeFdD617E99DE3F7DcDF10Cf5C',
        },
        symbol: 'FTT',
        decimals: 18,
        eligible: 'cap3',
    },
    'Holo': {
        addresses: {
            main: '0x6c6EE5e31d828De241282B9606C8e98Ea48526E2',
            kovan: '0x42e7ac41e14B87fA856c643db7B2c9e91A70eB2e',
        },
        symbol: 'HOT',
        decimals: 18,
        eligible: 'cap3',
    },
    'Huobi Token': {
        addresses: {
            main: '0x6f259637dcD74C767781E37Bc6133cd6A68aa161',
            kovan: '0x9B43a22393b1a13105e311e323E10388F63Af4F9',
        },
        'chainId': 42,
        'name': 'Huobi Token',
        symbol: 'HT',
        decimals: 18,
        eligible: 'cap3',
    },
    'Maker': {
        addresses: {
            main: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
            kovan: '0xD4fE7C53627735D3150Be07B291904B5Aa2AA976',
        },
        symbol: 'MKR',
        decimals: 18,
        eligible: 'cap3',
    },
    'Nexo': {
        addresses: {
            main: '0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206',
            kovan: '0x362CBB81950890360a6887B9787a6db50866ffd1',
        },
        symbol: 'NEXO',
        decimals: 18,
        eligible: 'cap3',
    },
    'Polygon': {
        addresses: {
            main: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
            kovan: '0xa2DA93fd4fb58B9EdF677f1648f99847b3ba6E2d',
        },
        symbol: 'MATIC',
        decimals: 18,
        eligible: 'cap3',
    },
    'Synthetix': {
        addresses: {
            main: 0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F,
            kovan: '0x163f4596f4054E0edFFa10eF83C0F43eA69cbEB0',
        },
        symbol: 'SNX',
        decimals: 18,
        eligible: 'cap3',
    },
    'Tether USD': {
        addresses: {
            main: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
            kovan: '0xC8d28a80c3110478a71506e8d9Cec5A40c07cc0E',
        },
        symbol: 'USDT',
        decimals: 6,
        eligible: 'cap3',
    },
    'The Graph': {
        addresses: {
            main: '0xc944E90C64B2c07662A292be6244BDf05Cda44a7',
            kovan: '0xA472F33e8aa4D9DedB581a7632c51C719980eaD0',
        },
        symbol: 'GRT',
        decimals: 18,
        eligible: 'cap3',
    },
    'Uniswap': {
        addresses: {
            main: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
            kovan: '0xd65064D6fd21576Fce1c7F1238616360C6c81097',
        },
        symbol: 'UNI',
        decimals: 18,
        eligible: 'cap3',
    },
    'USD Coin': {
        addresses: {
            main: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            kovan: '0x60981B6f25a0124c4B18fA003f6f3e40E705F573',
        },
        symbol: 'USDC',
        decimals: 6,
        eligible: 'cap3',
    },
    'Wrapped Bitcoin': {
        addresses: {
            main: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            kovan: '0x2aDf117fBA7b309BD0Ba7ce0701c241135f94AE3',
        },
        symbol: 'WBTC',
        decimals: 8,
        eligible: 'cap3',
    },
    'Wrapped Ethereum': {
        addresses: {
            main: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            kovan: '0xcd2E5d165A24176De9b23f248D29B7583F00d04F',
        },
        symbol: 'WETH',
        decimals: 18,
        eligible: 'cap3',
    },
    'yearn.finance': {
        addresses: {
            main: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
            kovan: '0xdf81e80111179860F67f5b200B43666DdA758375',
        },
        symbol: 'YFI',
        decimals: 18,
        eligible: 'cap3',
    },
};

module.exports = {
    tokens: tokens,
};
