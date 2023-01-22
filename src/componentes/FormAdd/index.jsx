import React from 'react'
import TextField from '../../componentes/TextField'
import styles from './FormAdd.module.css'
import Button from '../../componentes/Button'
import { useState } from 'react'

const FormAdd = () => {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    const registrar = (event) => {

    }

    const registroConcluido = () => {
        setNome('')
        setSobrenome('')
        setEmail('')
        setSenha('')
        setConfirmarSenha('')
    }

    return (
        <div className={styles.register}>
     
            <div className={styles.register_form_container}>

                <form onSubmit={(event) => registrar(event)}>
                    <TextField
                        id='nome'
                        label='Nome'
                        type='text'
                        required={true}
                        placeholder='Insira seu nome'
                        value={nome}
                        funcaoOnChange={valor => setNome(valor)}
                    />
                    <TextField
                        id='sobrenome'
                        label='Sobrenome'
                        type='text'
                        required={true}
                        placeholder='Insira seu sobrenome'
                        value={sobrenome}
                        funcaoOnChange={valor => setSobrenome(valor)}
                    />
                    <TextField
                        label="E-mail"
                        id="email"
                        type="email"
                        required={true}
                        placeholder="Insira seu e-mail"
                        value={email}
                        funcaoOnChange={value => setEmail(value)}
                    />
                    <TextField
                        label="Senha"
                        id="senha"
                        type="password"
                        required={true}
                        placeholder="Coloque sua senha"
                        value={senha}
                        funcaoOnChange={value => setSenha(value)}
                    />
                    <TextField
                        label="Confirmar senha"
                        id="confirmarSenha"
                        type="password"
                        required={true}
                        placeholder="Confirme a senha"
                        value={confirmarSenha}
                        funcaoOnChange={value => setConfirmarSenha(value)}
                    />
                    <Button>
                        Registrar
                    </Button>
                </form>
                <Button id={styles.botao_ir_login}>
                    Login
                </Button>
            </div>

        </div>
    )
}

export default FormAdd
