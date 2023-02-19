import { useAppContext } from '../context/context'
import style from '../styles/Table.module.css'
import TableRow from './TableRow'

const Table = () => {
  const {lotteryPlayers} = useAppContext()
  return (
    <div className={style.wrapper}>
      <div className={style.tableHeader}>
        <div className={style.addressTitle}>💳 User Address</div>
        <div className={style.amountTitle}>💲 Amount</div>
      </div>
      {lotteryPlayers.length ? lotteryPlayers.map((p, idx) =>  (
          <div key={idx} className={style.rows}>
            <TableRow player={p} />
          </div>
        )) : (
          <div className={style.noPlayers}>No players Yet </div>
      )}
    </div>
  )
}

export default Table
