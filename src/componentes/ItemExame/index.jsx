import React from 'react'
import styles from './ItemExame.module.css'
import { HiOutlineClipboardList } from 'react-icons/hi';

const ItemExame = ({ dadosExame }) => {
    const abrirExame = (url) => {
    }
    return (
        <div className={styles.item}>
            <p className={styles.item_data}>{dadosExame.data}</p>
            <p className={styles.item_tipo}>{dadosExame.tipo}</p>
            <a className={styles.item_icon} onClick={() => abrirExame(dadosExame.url)} href={dadosExame.url}><HiOutlineClipboardList /></a>
        </div>
    )
}

export default ItemExame
