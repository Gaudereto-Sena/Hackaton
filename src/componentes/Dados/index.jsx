import React from 'react';
import Button from '../Button';
import ItemExame from '../ItemExame';
import ItemLaudo from '../ItemLaudo';
import ItemPerfil from '../ItemPerfil';
import styles from './Dados.module.css';
import { BsPlusCircle } from 'react-icons/bs'
import { HiOutlineBackspace } from 'react-icons/hi'
import AdicionarDados from '../AdicionarDados';

const Dados = ({ dados, paginaAtiva, isAdicionarDados, adicionarDados }) => {
    return (
        <div className={styles.dados}>
            {isAdicionarDados ? <AdicionarDados dadosPaciente={dados}/> : paginaAtiva[2] ?  dados.exames ? dados.exames.map(dado => {
                return <ItemExame dadosExame={dado} />
            }) : <p>Nenhum exame realizado</p> :
                paginaAtiva[1] ? dados.diagnostico.map(dado => {
                    return <ItemLaudo dadosLaudo={dado} />
                }) :
                    paginaAtiva[0] ? <ItemPerfil dadosPerfil={dados} /> : ''
            }
            <Button funcaoOnClick={() => adicionarDados()}>
                {!isAdicionarDados ?
                    <div className={styles.botao_adicionar}>
                        <>Adicionar informações</>
                        <BsPlusCircle size={24} />
                    </div> : <div className={styles.botao_adicionar}>
                        <>Voltar</>
                        <HiOutlineBackspace size={24} />
                    </div>}
            </Button>
        </div>
    )
}

export default Dados
