const hre = require('hardhat')
const network = require('hardhat')
const { ethers } = require('hardhat');
const fs = require('fs')
const { BigNumber } = require('ethers')
const { NewTouchIdAccountSafe } = require('../src/types')
const { NewTouchIdAccountSafe__factory } = require('../src/types/factories')
const NewTouchIdAccountProxyFactory = require('../artifacts/contracts/samples/NewTouchIdSafeAccountProxyFactory.sol/NewTouchIdSafeAccountProxyFactory.json');
// const snarkjs = require("snarkjs")
// const ethers = require('ethers')

async function main() {
	const accounts = await hre.ethers.getSigners()
	
	// FOR NEW DEPLOYMENT //
	// const [owner, heir, lawyer] = accounts
	const owner = accounts[0]
	console.log(`owner add ${owner.address}`)
	// const OTPFactory = await ethers.getContractFactory('OTPFactory')
	// const oTPFactory = await OTPFactory.deploy()
	// await oTPFactory.deployed()
	// console.log('oTPFactory deployed:', oTPFactory.address)


	// const Verifier = await ethers.getContractFactory('Verifier');
	// const verifier = await Verifier.deploy();
	// console.log('verifier :', verifier.address);

	const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4');
	const wallet = new ethers.Wallet("a66cf2b4bad26d3c10c0d6fc748f91f3fda596db7b6bc289c38bb3d3ff711e74", provider);

	const NewTouchIdAccountProxyFactoryContract = new ethers.Contract(
		"0x8bd7A25A0f3dC4E3b9b465E130A9117299D5e4b6",
		NewTouchIdAccountProxyFactory.abi,
		wallet
	)

	const singletonContract = "0xe75Ea15be97753bc9d7F2A70dfE0fd0EB4a5AB51";


	const NewTouchIdAccountSafeInstance = NewTouchIdAccountSafe__factory.connect(
		singletonContract,
		provider
      );

	//   console.log("Instance: ", NewTouchIdAccountSafeInstance.interface);

	// setupWithEntrypoint(address[],uint256,address,bytes,address,address,uint256,address,address
	const encodedSetupEntryPoint = NewTouchIdAccountSafeInstance.interface.encodeFunctionData('setupWithEntrypoint',
	[
		["0x288d1d682311018736B820294D22Ed0DBE372188"],
		1,
		"0x288d1d682311018736B820294D22Ed0DBE372188",
		"0x",
		"0x288d1d682311018736B820294D22Ed0DBE372188",
		"0x288d1d682311018736B820294D22Ed0DBE372188",
		0,
		"0x288d1d682311018736B820294D22Ed0DBE372188",
		"0x288d1d682311018736B820294D22Ed0DBE372188"
	]);

	// console.log("Contract ", NewTouchIdAccountProxyFactoryContract);

	const txn = await NewTouchIdAccountProxyFactoryContract.createProxyWithNonce(singletonContract,
		"0x",
		"1",
		{
			gasLimit: 10000000
		});
		await txn.wait();
		console.log(txn);
	// await txn.wait();
	// console.log("Hash ", txn.hash());
	// const NewTouchIdAccountDeployer = await ethers.getContractFactory('NewTouchIdAccountSafe');
	// const newTouchIdAccountDeployer = await NewTouchIdAccountDeployer.deploy();
	// console.log('NewTouchIdAccountSafe :', newTouchIdAccountDeployer.address);

	// const NewTouchIdAccountProxy = await ethers.getContractFactory('NewTouchIdSafeAccountProxy');
	// const newTouchIdAccountProxy = await NewTouchIdAccountProxy.deploy(newTouchIdAccountDeployer.address);
	// console.log('NewTouchIdAccountProxy :', newTouchIdAccountProxy.address);

	// const NewTouchIdAccountProxyFactory = await ethers.getContractFactory('NewTouchIdSafeAccountProxyFactory');
	// const newTouchIdAccountProxyFactory = await NewTouchIdAccountProxyFactory.deploy();
	// console.log('NewTouchIdAccountProxy Factory :', newTouchIdAccountProxyFactory.address);

	


	// const ec = await ethers.getContractFactory('EllipticCurve');
	// const ec_deployed = await ec.deploy();
	// console.log('Elliptic :', ec_deployed.address);

	// const st = await ethers.getContractFactory('Staking');
	// const stDeployer = await st.deploy();
	// console.log('staking :', stDeployer.address);
	
	// const PUBLIC_KEY_EXPOSED = '0xA8458B544c551Af2ADE164C427a8A4F13A346F2A'
	// const PRIVATE_KEY_EXPOSED = '326d3b8f081040e0044fde540508dde301cdae5c387d207f7ea15ceb32b9630d';
	// const receiver = '0xE6C9E76028cFf978E139a7a5B3E289bca75110cc';
	// const fundTxn = {
    //     from: PUBLIC_KEY_EXPOSED,
    //     to: receiver,
    //     value: ethers.utils.parseEther("0.5"),
    //     gasLimit: 210000
    //   }
	// /const wallet = new ethers.Wallet(PRIVATE_KEY_EXPOSED, new ethers.providers.JsonRpcProvider('https://opt-goerli.g.alchemy.com/v2/Q37EPFzF1O8kJt4oTob4ytwuUFTW0Gas'));
	// const txn = await wallet.sendTransaction(fundTxn);
	// await txn.wait()
	// console.log(txn);



	// const EntryPoint = await ethers.getContractFactory('EntryPoint');
	// const entryPoint = await EntryPoint.deploy();
	// console.log('entryPoint :', entryPoint.address);
}

main();

// function stringToHex(string) {
// 	let hexStr = '';
// 	for (let i = 0; i < string.length; i++) {
// 		let compact = string.charCodeAt(i).toString(16)
// 		hexStr += compact
// 	}
// 	return '0x' + hexStr
// }

// function getAbi(jsonPath) {
// 	let file = fs.readFileSync(jsonPath)
// 	let abi = JSON.parse(file.toString()).abi
// 	return abi
// }

// async function delay(sec) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(resolve, sec * 1000);
// 	})
// }

// function m(num, decimals) {
// 	return BigNumber.from(num).mul(BigNumber.from(10).pow(decimals))
// }

// function d(bn, decimals) {
// 	return bn.mul(BigNumber.from(100)).div(BigNumber.from(10).pow(decimals)).toNumber() / 100
// }

// function b(num) {
// 	return BigNumber.from(num)
// }

// function n(bn) {
// 	return bn.toNumber()
// }

// function s(bn) {
// 	return bn.toString()
// }

// async function getProof(psw, amount, user) {

// 	let input = [stringToHex(psw), amount]
// 	console.log('input', input)

// 	let data = await snarkjs.groth16.fullProve({in:input}, "./zk/new_circuit/circuit_js/circuit.wasm", "./zk/new_circuit/circuit_0001.zkey")

// 	// console.log("pswHash: ", data.publicSignals[0])
// 	console.log(JSON.stringify(data))

// 	const vKey = JSON.parse(fs.readFileSync("./zk/new_circuit/verification_key.json"))
// 	const res = await snarkjs.groth16.verify(vKey, data.publicSignals, data.proof)

// 	if (res === true) {
// 		console.log("Verification OK")

// 		let pswHash = data.publicSignals[0]
// 		let allHash = data.publicSignals[2]
// 		// console.log(`getProof: user add ${user.address}`)
// 		let boxhash = ethers.utils.solidityKeccak256(['uint256', 'address'], [pswHash, user.address])

// 		let proof = [
// 			BigNumber.from(data.proof.pi_a[0]).toHexString(),
// 			BigNumber.from(data.proof.pi_a[1]).toHexString(),
// 			BigNumber.from(data.proof.pi_b[0][1]).toHexString(),
// 			BigNumber.from(data.proof.pi_b[0][0]).toHexString(),
// 			BigNumber.from(data.proof.pi_b[1][1]).toHexString(),
// 			BigNumber.from(data.proof.pi_b[1][0]).toHexString(),
// 			BigNumber.from(data.proof.pi_c[0]).toHexString(),
// 			BigNumber.from(data.proof.pi_c[1]).toHexString()
// 		]

		
// 		return {proof, pswHash, boxhash, allHash}

// 	} else {
// 		console.log("Invalid proof")
// 	}
// }


// async function approveNFT(
//     heirToken,
//     user,
//     to,
//     tokenId
//   ){
//     await heirToken.connect(user).approve(to, tokenId);
// 	console.log(`Heir token approved`)
//   }

// async function moveBlocks(numOfBlocks){
//     console.log("Moving blocks.... ")
//     for (let i =0; i<= numOfBlocks; i++){
//         await network.provider.request({
//             method: "evm_mine",
//             params: [],
//         })
//     }
//     console.log(` Blocks moved by ${numOfBlocks} `)
// }

// async function rechargeWithAddress(PecuniaLock, owner, heirAddr, amount, tokenuri){
// 	const tokenId = await PecuniaLock.connect(owner).rechargeWithAddress(owner.address, heirAddr, tokenuri, {value: amount})
	
// 	console.log('step 2 rechargeWithAddress done')
// 	return tokenId
// }

// main()
// 	.then(() => process.exit(0))
// 	.catch(error => {
// 		console.error(error);
// 		process.exit(1);
// 	});