import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Dashboard from '../../componentes/Dashboard';
import Dados from '../../componentes/Dados';
import FormAdd from '../../componentes/FormAdd';
import dadosJSON from './dados.json'

const PaginaPaciente = () => {

    const [isPaginaAtiva, setIsPaginaAtiva] = useState([true, false, false])

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
    return (
        <Dashboard isPaginaAtiva={isPaginaAtiva} funcaoOnClick={paginaAtiva}>
            <Dados dados={dadosJSON.paciente[0]} paginaAtiva={isPaginaAtiva}/>
        </Dashboard>

    )
}

export default PaginaPaciente
