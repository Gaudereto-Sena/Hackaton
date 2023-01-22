import React from 'react'
import styles from './ItemLaudo.module.css'
import {BsPlusCircle} from 'react-icons/bs'

const ItemLaudo = ({dadosLaudo}) => {

    return (
        <div className={styles.item}>
            <p className={styles.item_data}>{dadosLaudo.data}</p>
            <p className={styles.item_tipo}>{dadosLaudo.tipo}</p>
            <a className={styles.item_icon} href={dadosLaudo.url}><BsPlusCircle /></a>
        </div>
    )
}

export default ItemLaudo
