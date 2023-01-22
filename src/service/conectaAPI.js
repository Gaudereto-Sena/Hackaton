import axios from 'axios'

async function consultaPacientes() {
    const conexao = await fetch('http://localhost:3000/pacientes')
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function editaPaciente(categoria, descricao, URL, nome, paciente) {
    paciente[categoria].push(
        categoria == 'habitos' ?
            nome :
            categoria == 'exames' ?
                {
                    "tipo": nome,
                    "data_diagnostico": "22/01/2022",
                    "diagnostico": descricao,
                    "url": URL
                } : 
                {
                    nome: nome,
                    estado: true
                }
    )

    const dados = await fetch(`http://localhost:3000/pacientes/${paciente.id}`, {
        method: 'PATCH',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify({
            paciente
        })
    })

    console.log(paciente)
    /*   if(!video.ok) {
          throw new Error('Não foi possivel envir o video')
      }
  
      const videoConvertido = await video.json() */

    /* return videoConvertido */
}


export const conectaAPI = {
    consultaPacientes,
    editaPaciente
}
