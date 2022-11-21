require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name raise noise huge give knee metal genuine'; 
let testAccounts = [
"0x1153fd42b6554220b518780429d286280cd4b90bb1ca0d5c617e41f9ec8a03b5",
"0x148233a567e6135d3fad5d04c5f44487a29b9b75f68ddf4b31ce041b149c7b23",
"0x08d215efe8eae0b5b6ff5e917311601bc61a8ec46de1c411191f4402b7fe135a",
"0x78d5c4c97bfca965b9a70d45b2a13de410ba708475abcabbe402357f209145f3",
"0x2eacd0c51b2cb8211137dc7395598aed2041a891f6fa103745c8042e5ada54d8",
"0x49b45568c9950059fdcf3336daae198669f0e5767c920c153b548d0c385d9576",
"0xa0598010208f2285f0a302c4457efdc0af4382250f88a52db8f2f922ac38c774",
"0x4abb811a75c7c8efb1a2f965f10a19b7d66c1207445173df5c3d9687656c31ad",
"0x819802650cd12554be530430dda0d7cdccb3ffa416cc7ac2fb4a441dd67f2263",
"0xd1a4f6607f3e25d44880ecc7e225eca11b1fde1cf444421e04d5804358d6830c"
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

