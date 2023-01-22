export default function validaCPF(valor) {
    const cpf = valor.replace(/\.|-?/g, '')
   return cpf
}

function validaNumerosRepetidos(cpf) {
    const numerosCPF = cpf.split('')
    return numerosCPF.map((n, idx, array) => {
        return idx == 0 ? n == array[idx + 1] : n == array[idx-1] 
    }).every(bol => bol == true)
}

function validaPrimeiroNumeroCPF(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let i = 0; i < 9; i++) {
        soma += cpf[i]*multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0
    }
    
    return soma != cpf[9]
}

function validaSegundoNumeroCPF(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let i = 0; i < 10; i++) {
        soma += cpf[i]*multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0
    }
    return soma != cpf[10]
}