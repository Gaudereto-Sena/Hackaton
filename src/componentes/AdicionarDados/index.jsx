import React from 'react'
import TextField from '../TextField';
import Text from '../Text';
import styles from './AdicionarDados.module.css'
import Button from '../Button';
import { useState } from 'react';
import { useEffect } from 'react';
import { conectaAPI } from '../../service/conectaAPI';

const AdicionarDados = ({ dadosPaciente }) => {
    const [descricao, setDescricao] = useState('')
    const [categoria, setCategoria] = useState('')
    const [nome, setNome] = useState('')
    const [URL, setURL] = useState('')

    const adicionarDados = async () => {
        conectaAPI.editaPaciente(categoria, descricao, URL, nome, dadosPaciente)
    }

    return (
        <div className={styles.formulario}>
            <Text type={'h3'}>
                Adicionar
            </Text>

            <select name="categoria" id="categoria" value={categoria} onChange={(valor) => setCategoria(valor.target.value)}>
                <option value="doencas">Doenças crônicas</option>
                <option value="alergias">Alergias</option>
                <option value="habitos">Habitos</option>
                <option value="exames">Exames</option>
            </select>
            <TextField
                id='nome'
                label='Informativo'
                type='text'
                required={true}
                placeholder='Insira o tipo/nome do evento/doença'
                value={nome}
                funcaoOnChange={(valor) => setNome(valor)}
            />
            <label htmlFor='descricao'>Descrição</label>
            <textarea
                cols={10}
                id='descricao'
                name="descricao"
                value={descricao}
                onChange={(valor) => setDescricao(valor.target.value)} />

            <TextField
                id='url'
                label='URL'
                type='text'
                required={true}
                placeholder='Insira a URL'
                value={URL}
                funcaoOnChange={(valor) => setURL(valor)}
            />

            <Button id={styles.botao_adicionar} funcaoOnClick={() => adicionarDados()}>
                Adicionar
            </Button>
        </div>
    )
}

export default AdicionarDados
