import style from '../styles/Home.module.css'
import Header from '../components/Header'
import LotteryCard from '../components/LotteryCard'
import Table from '../components/Table'

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header/>
      <LotteryCard/>
      <Table/>
    </div>
  )
}