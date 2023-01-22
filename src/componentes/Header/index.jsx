import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>Hospital/Clínica: Monte Sinai</p>
                <Link to='/home'><h1>INOVAMED</h1></Link>
                <div>
                    <p>Médico:</p>
                    <p>CRM 10AI002HY2312</p>
                </div>
            </div>
        </div>
    )
}

export default Header
