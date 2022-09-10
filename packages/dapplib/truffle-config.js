require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain slow hope clinic bottom slot'; 
let testAccounts = [
"0xa7e5d2fdf9d93d6e0f77d3a4b11d5fe0b6002343173e722f032c708491a7e6eb",
"0x238f7e2f1fedeac6805535d95a770b9c6423fcd3d0f23c92f32b53d3e206183c",
"0x5def28ccd4f5a0d15704465e7764eed8d4664aa4362fbaf07098138f1db2da5c",
"0x500e0d3e10f49d971b258609ed876e74f7133539b29a7810d6bd745003f5978c",
"0xfd20a4234bc77b47e7aafe46e80f864c66abd7ada4855eea8d443e1c6f955e17",
"0x485dffebf60a4c97a223bcbfdfd3feebed39a2d47c80bad008849bcbd82af9f2",
"0xe8e7a2edfc52d90aa813dc5a431ec4f079db676724be6a93b3a8a333264b4ac0",
"0x90b4dd834ae0d27d029a5d0a46083f5c8b37ae34441aa6fc924324a72a664974",
"0xfaed8fcf87e5032249b4118bc439727c698ea3141bb0daafe6b370ed1b578036",
"0x876b931eb7bbc39949a1b9e95b8fd6a8825c3b5c239328da8257d484711de45e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

