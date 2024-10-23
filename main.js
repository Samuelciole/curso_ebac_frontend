const form = document.getElementById('formDeposito')
const nome = document.getElementById('nome-Beneficiario')
let formValido = false

function validaNome (nomeCompleto){
    const nomecomoArray = nomeCompleto.split(' ')
    return nomecomoArray.length >= 2
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    
   
    const valor = document.getElementById('valorDeposito')
    const banco = document.getElementById('numeroConta')
    const smsSucesso = `O montante ${valor.value} vai ser depositado para o cliente ${nome.value} para a conta - ${banco.value}`
    formValido = validaNome(nome.value)
    if (formValido){
        const monte = document.querySelector('.montante')
        monte.innerHTML = smsSucesso
        monte.style.display = 'block';
        nome.value = ''
        valor.value = ''
        banco.value = ''
    }
    else{
        nome.style.border = '1px solid red';
        const erro = document.querySelector('.name')
        erro.style.display = 'block'
        nome.value = ''
    }

})

nome.addEventListener('keyup',function(e){
    formValido = validaNome(e.target.value)

    if (!formValido){
        nome.style.border = '1px solid red';
        nome.classList.add('erro')
        document.querySelector('.name').style.display = 'block'
    }
    else{
        nome.classList.remove('erro')
        document.querySelector('.name').style.display = 'none'
    }
})




