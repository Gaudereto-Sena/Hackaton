import React from 'react'
import styles from './ItemPerfil.module.css'

const ItemPerfil = ({ dadosPerfil, id }) => {
    return (
        <>
            <div className={styles.item} key={id}>
                <h3 className={styles.item_nome}>Doenças</h3>
                <ul>
                    {dadosPerfil.doencas ? dadosPerfil.doencas.map((doenca) => {
                       return doenca.estado ? <li>{doenca.nome}</li> : ''
                    }) : <li>Nenhuma doença</li>}
                </ul>
            </div>
            <div className={styles.item} key={id}>
                <h3 className={styles.item_nome}>Alergias</h3>
                <ul>
                    {dadosPerfil.alergias ? dadosPerfil.alergias.map((alergia) => {
                       return alergia.estado ? <li>{alergia.nome}</li> : ''
                    }) : <li>Nenhuma alergia</li>}
                </ul>
            </div>
            <div className={styles.item} key={id}>
                <h3 className={styles.item_nome}>Cirurgias</h3>
                <ul>
                    {dadosPerfil.cirurgias ? dadosPerfil.cirurgias.map((cirurgia) => {
                       return <li>{cirurgia}</li>
                    }) : <li>Nenhuma cirurgia</li>}
                </ul>
            </div>
            <div className={styles.item} key={id}>
                <h3 className={styles.item_nome}>Cirurgias</h3>
                <ul>
                    {dadosPerfil.cirurgias ? dadosPerfil.habitos.map((habito) => {
                       return <li>${habito}</li>
                    }) : <li>Nenhum hábito</li>}
                </ul>
            </div>
        </>
    )
}

export default ItemPerfil