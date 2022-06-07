require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// const rinkebyRpcUrl = process.env.RINKEBY_RPC_URL;
// const privateKey = process.env.PRIVATE_KEY;

module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		rinkeby: {
			url: "https://eth-rinkeby.alchemyapi.io/v2/_aHNaePZ0dri-_Shk1DmdNbpxwLWpe00",
			accounts: [
				"b24bbbc35e8aea1aeada7d8d5268456ab9e725071a584e5a7b84e231a2f62628",
			],
			chainId: 4,
		},
		ganache: {
			url: "HTTP://127.0.0.1:7545",
		},
	},
	solidity: "0.8.4",
};
