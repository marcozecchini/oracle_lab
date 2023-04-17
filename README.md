# Oracle 

1. Install chainlink contracts: `npm install @chainlink/contracts --save`
2. https://docs.chain.link/docs/request-and-receive-data/ 
3. https://docs.chain.link/docs/make-a-http-get-request/ 
4. Run `npx hardhat run --network <network-name> scripts/deploy.js` to deploy `APIConsumer.sol`  contract
5. Before invoking the `requestVolumeData` function in the `npx hardhat run --network <network-name> scripts/index.js` script, fund your contract with LINK and your account with Ether from https://faucets.chain.link/ 
    
    a. The faucet works only with Metamask. Send the LINK token from Metamask to your contract.


## Incubed

* Concept [Slides](https://slideslive.com/38911940)
* Run `node in3.js`