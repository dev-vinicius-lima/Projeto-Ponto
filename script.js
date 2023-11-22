let funcionarios = []

let input = document.getElementById('input1')
let data = document.getElementById('data')
let horaEntrada = document.getElementsByName('time-entrada')
let horaSaida = document.getElementsByName('time-saida')
let baterPonto = document.getElementById('ponto')
let todosFuncionarios = document.getElementById('tf')
let remover = document.getElementById('rf')
let resultado = document.getElementById('res')


baterPonto.addEventListener('click', () => {
    let valorInput = input.value
    if (input.value !== '' && data.value !== '') {
        let dataValor = data.value
        let horaEntradaValor = horaEntrada[0].value
        let horaSaidaValor = horaSaida[0].value

        let pontoBatido = {
            nome: input.value,
            data: dataValor,
            hE: horaEntradaValor,
            hS: horaSaidaValor
        }

        funcionarios.push(pontoBatido)
        input.value = ''

        resultado.classList.remove('hidden')
        resultado.innerHTML = 'Ponto Batido'

    } else {
        resultado.classList.remove('hidden')
        resultado.innerHTML = 'Adicione dados válidos'
    }
    
})

todosFuncionarios.addEventListener('click', () => {
    resultado.classList.remove('hidden')
    let listaFuncionariosFormatada = funcionarios.map(function (funcionario) {
        return `Nome: ${funcionario.nome}<br>Data: ${funcionario.data}<br>Hora Entrada: ${funcionario.hE}<br>Hora Saída: ${funcionario.hS}&nbsp;<br>`;
    }).join('<br>');
    resultado.innerHTML = listaFuncionariosFormatada;

})


remover.addEventListener('click', () => {
    if (input.value !== '') {
        funcionarios = funcionarios.filter(funcionario => funcionario.nome !== input.value);
        resultado.classList.remove('hidden');
        resultado.innerHTML = 'Removido com sucesso';
    } else {
        resultado.classList.remove('hidden');
        resultado.innerHTML = 'Digite um nome para remover o funcionário';
    }
});













