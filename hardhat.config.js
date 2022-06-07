require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners()

	for (const account of accounts) {
		console.log(account.address)
	}
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const rinkebyRpcUrl = process.env.RINKEBY_RPC_URL
const privateKey = process.env.PRIVATE_KEY
const ganachUrl = process.env.GANACH_URL

module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		rinkeby: {
			url: rinkebyRpcUrl,
			accounts: [privateKey],
			chainId: 4,
		},
		ganache: {
			url: ganachUrl,
		},
	},
	solidity: "0.8.4",
}
