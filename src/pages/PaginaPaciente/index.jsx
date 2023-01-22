import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Dashboard from '../../componentes/Dashboard';
import Dados from '../../componentes/Dados';
import FormAdd from '../../componentes/FormAdd';
import dadosJSON from './dados.json'
import { useEffect } from 'react';
import Header from '../../componentes/Header';
import PerfilDados from '../../componentes/PerfilDados';
import Footer from '../Home/components/HomeFooter';

const PaginaPaciente = ({paciente}) => {

    const [isPaginaAtiva, setIsPaginaAtiva] = useState([true, false, false])
    const [isAdicionarDados, setIsAdicionarDados] = useState(false)

    const paginaAtiva = (pagina) => {
        switch (pagina) {
            case 'perfil':
                setIsPaginaAtiva([true, false, false]);
                break;
            case 'laudos':
                setIsPaginaAtiva([false, true, false])
                break;
            case 'exames':
                setIsPaginaAtiva([false, false, true])
                break;
        }
    }

    const adicionarDados = () => {
        setIsAdicionarDados(!isAdicionarDados)
    }

    useEffect(() => {
        setIsAdicionarDados(false)
    }, [isPaginaAtiva])

    return (
        <>
            <Header />
            <PerfilDados dados={paciente} />
            <Dashboard isPaginaAtiva={isPaginaAtiva} funcaoOnClick={paginaAtiva}>
                <Dados dados={paciente} paginaAtiva={isPaginaAtiva} isAdicionarDados={isAdicionarDados} adicionarDados={adicionarDados} />
            </Dashboard>
            <Footer />
        </>



    )
}

export default PaginaPaciente
