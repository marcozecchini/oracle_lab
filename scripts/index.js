// scripts/deploy.js
async function main () {

  // Retrieve accounts from the local node
    const accounts = await ethers.getSigners();
    console.log(accounts[0].address)

    // We get the contract to deploy
    const Contract = await ethers.getContractFactory('APIConsumer');
    let contract = await Contract.attach('0xC40f066EdB2ee3f8de715a9dA82421dFBa45Ab67')
    console.log('Contract deployed to:', contract.address);

    // Send a transaction to mint an NFT
    let tx = await contract.requestVolumeData();
    let receipt = await tx.wait();  

    let volume = await contract.volume();
    console.log("Retrived volume:", volume.toString())
  }

  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });