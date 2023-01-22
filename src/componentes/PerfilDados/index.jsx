import React from 'react'
import Perfil from "./icons/perfil";
import styles from './PerfilDados.module.css'

const PerfilDados = ({dados}) => {
    return (
        <div className={styles.nav}>
            <div className={styles.headerProfile}>
                <div className={styles.image}>
                    <Perfil />
                </div>
                <div className={styles.profile}>
                    <p><b>Nome paciente: </b>{dados.nome_paciente}</p>
                    <p><b>Data de nascimento: </b>{dados.data_nascimento}</p>
                    <p><b>Tipo sangíneo: </b>{dados.tipo_sanguineo}</p>
                </div>
            </div>
        </div>
    )
}

export default PerfilDados
