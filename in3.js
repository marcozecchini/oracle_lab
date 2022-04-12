/// Reads the latest block by calling IN3's web3.js-compatible eth API.
/// Read the eth api from web3.js docs: https://web3js.readthedocs.io/en/v1.3.0/web3-eth.html
const { IN3 } = require('in3')

const Web3 = require('web3')
var Contract = require('web3-eth-contract');
var Box = require('./artifacts/contracts/Box.sol/Box.json')


const in3 = new IN3({
    proof: 'standard',
    signatureCount: 1,
    requestCount: 1,
    chainId: 'goerli',
    replaceLatestBlock: 10
})

let address = "0xC40f066EdB2ee3f8de715a9dA82421dFBa45Ab67"

// Use IN3 network client as a Http-Provider
const web3 = new Web3(in3.createWeb3Provider());

(async () => {

    const block = await web3.eth.getBlock('latest')
    console.log("Block : ", block)
    
})().catch(console.error);