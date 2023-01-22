import { useEffect, useState } from 'react';
import Home from './pages/Home/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaPaciente from './pages/PaginaPaciente';
/* import dados from './pages/PaginaPaciente/dados.json'; */
import PageLogin from './pages/pageLogin/pageLogin';
import { conectaAPI } from './service/conectaAPI';

function App() {

  const [dados, setDados] = useState([])
  const [pacienteProcurado, setPacienteProcurado] = useState({})

  useEffect(() => {
    async function chamaAPI() {
      return await conectaAPI.consultaPacientes()
    };
    chamaAPI().then(res => {
      setDados(res)
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLogin />} />
        <Route path='/home' element={<Home dadosPacientes={dados} setPacienteProcurado={setPacienteProcurado} />} />
        <Route path='/paciente' element={<PaginaPaciente paciente={pacienteProcurado} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
