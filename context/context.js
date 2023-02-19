import { createContext, useState, useEffect, useContext } from 'react'
import Web3 from 'web3'
import createContract from '../utils/create-contract'

export const appContext = createContext()

export const AppProvider = ({ children }) => {
  const [address, setAddress] = useState(null)
  const [web3, setWeb3] = useState(null)
  const [contract, setContract] = useState(null)
  const [lotteryPlayers, setLotteryPlayers] = useState([])
  const [lastWiner, setLastWiner] = useState(null)
  const [lotteryId, setLotteryId] = useState(null)

  const connectWallet = async () => {
    if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      try {
          await window.ethereum.request({method: 'eth_requestAccounts'})
          const web3 = new Web3(window.ethereum)
          const [acc] = await web3.eth.getAccounts()
          const cntr = createContract(web3)

          setWeb3(web3)
          setAddress(acc)
          setContract(cntr)

          window.ethereum.on('accountsChanged', async () => {
            const [acc] = await web3.eth.getAccounts()
            setAddress(acc)
          })
      } catch(e){
        console.log(e)
      }
    } else {
      console.log('Please install MetaMask')
    }
  }

  const enterLottery = async () => {
    try {
      await contract.methods.enter().send({
        from: address,
        value: web3.utils.toWei('0.1', 'ether'),
        gas: 3000000,
        gasPrice: null
      })
    } catch(e) {
      console.log(e)
    }
  }

  return <appContext.Provider value={{connectWallet, enterLottery, address}}>{children}</appContext.Provider>
}

export const useAppContext = () => {
  return useContext(appContext)
}
