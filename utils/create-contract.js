import {contractABI, contractAddress} from './constants'

const createContract = web3 => new web3.eth.Contract(contractABI, contractAddress)

export default createContract