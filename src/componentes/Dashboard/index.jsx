import React from 'react'
import { useState } from 'react'
import styles from './Dashboard.module.css'

const Dashboard = ({ children, isPaginaAtiva, funcaoOnClick }) => {

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_abas}>
        <ul>
          <li className={isPaginaAtiva[0] ? `${styles.abas} ${styles.active}` : `${styles.abas}`} onClick={() => funcaoOnClick('perfil')}>Perfil</li>
          <li className={isPaginaAtiva[1] ? `${styles.abas} ${styles.active}` : `${styles.abas}`} onClick={() => funcaoOnClick('laudos')}>Laudos</li>
          <li className={isPaginaAtiva[2] ? `${styles.abas} ${styles.active}` : `${styles.abas}`} onClick={() => funcaoOnClick('exames')}>Exames</li>
        </ul>
      </div>
      <div className={styles.dashboard_corpo}>
        {children}
      </div>
    </div>
  )
}

export default Dashboard