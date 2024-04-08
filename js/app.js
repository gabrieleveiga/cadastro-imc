let btn = document.getElementById('btn')
let div = document.getElementById('resultado')
let arrPessoas = []

function cadastrar() {

    let pessoa = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        categoria: document.getElementById('categoria').value,
        peso: document.getElementById('peso').value,
        altura: document.getElementById('altura').value
    }

    arrPessoas.push(pessoa)
    console.log(arrPessoas);

    imprimirDados()

}

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificacao(imc) {

    if (imc < 18.5) {
        return 'Seu peso está abaixo do normal'
    } else if (imc > 18.6 && imc <= 24.9) {
        return 'Seu peso está normal'
    } else if (imc > 25 && imc <= 29.9) {
        return 'Você está sobre peso'
    } else if (imc > 30 && imc <= 34.9) {
        return 'Você está com obesidade grau I'
    } else if (imc > 35 && imc <= 39.9) {
        return 'Você está com obesidade grau II'
    } else {
        return 'Você está com obesidade grau III'
    }

}

function imprimirDados() {

    div.innerHTML = ''

    for (let i = 0; i < arrPessoas.length; i++) {

        div.innerHTML += ` 
        <tr>
            <td>${arrPessoas[i].nome} ${arrPessoas[i].sobrenome} </td>
            <td>${arrPessoas[i].categoria} </td>
            <td>${calcularIMC(arrPessoas[i].peso , arrPessoas[i].altura).toFixed(2)} -  ${classificacao(calcularIMC(arrPessoas[i].peso ,arrPessoas[i].altura))} </td>
        </tr> `

    }
}
btn.addEventListener('click', cadastrar)