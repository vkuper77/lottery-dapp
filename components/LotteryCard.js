import style from '../styles/PotCard.module.css'
import truncateEthAddress from 'truncate-eth-address'
import { useAppContext } from '../context/context'

const LotteryCard = () => {
  const { enterLottery, lotteryPot, lotteryId, pickWinner, lastWiner } = useAppContext()

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        Lottery <span className={style.textAccent}>#{lotteryId}</span>
      </div>
      <div className={style.pot}>
        Pot 🍯: <span className={style.goldAccent}>{lotteryPot} ETH</span>
      </div>

      <div className={style.recentWinnerTitle}>🏆Last Winners🏆</div>
      {!!lastWiner ? <div className={style.winner}>{truncateEthAddress(lastWiner)}</div> : <div className={style.winner}>No Winner Yet!</div>}
      <div className={style.btn} onClick={enterLottery}>Enter</div>
      <div className={style.btn} onClick={pickWinner}>Pick Winner!</div>
    </div>
  )
}

export default LotteryCard
