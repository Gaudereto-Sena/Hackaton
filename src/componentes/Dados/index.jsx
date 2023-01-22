import React from 'react';
import Button from '../Button';
import ItemExame from '../ItemExame';
import ItemLaudo from '../ItemLaudo';
import ItemPerfil from '../ItemPerfil';
import styles from './Dados.module.css';
import {BsPlusCircle} from 'react-icons/bs'

const Dados = ({ dados, paginaAtiva }) => {

    return (
        <div className={styles.dados}>
            {paginaAtiva[2] ? dados.exames.map(dado => {
                return <ItemExame dadosExame={dado} />
            }) :
                paginaAtiva[1] ? dados.laudos.map(dado => {
                    return <ItemLaudo dadosLaudo={dado} />
                }) :
                    paginaAtiva[0] ? <ItemPerfil dadosPerfil={dados} /> : ''
            }
            <Button>
                <div className={styles.botao_adicionar}>
                    <>Adicionar informações</>
                    <BsPlusCircle size={24}/>
                </div>
            </Button>
        </div>
    )
}

export default Dados
