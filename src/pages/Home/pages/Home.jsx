import React from 'react'
import HomeFooter from '../components/HomeFooter'
import HomeBody from '../components/HomeBody'
import HomeNavbar from '../components/HomeNavbar'
import styles from './Home.module.css'


const Home = ({dadosPacientes, setPacienteProcurado}) => {
  return (
    <div className={styles.home}>
        <HomeNavbar />
        <HomeBody dadosPacientes={dadosPacientes} setPacienteProcurado={setPacienteProcurado}/>
        <HomeFooter />
    </div>
  )
}

export default Home