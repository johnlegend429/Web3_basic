const Web3 = require('web3')
const rpcURL = '' // Your RPC URL goes here
// const web3 = new Web3('https://mainnet.infura.io/YOUR_INFURA_API_KEY')
const web3 = new Web3(rpcURL)
const address = '' // Your account address goes here
web3.eth.getBalance(address, (err, wei) => {
  balance = web3.utils.fromWei(wei, 'ether')
})