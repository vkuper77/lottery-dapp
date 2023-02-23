import style from '../styles/Header.module.css'

const ConnectWalletBtn = ({connectWallet}) => {
  return <button onClick={connectWallet} className={style.loginBtn}>Connect Wallet</button>
}
export default ConnectWalletBtn
