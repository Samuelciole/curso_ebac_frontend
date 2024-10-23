const form = document.getElementById('forms')
const campoOne = document.getElementById('campoA')
const campoTwo = document.getElementById('campoB')

function validaNumero(a,b){
    
    return a < b
}

form.addEventListener('submit', function(e){
    e.preventDefault()

const valorUm = Number(campoOne.value);
const valorDois = Number(campoTwo.value);
const sucessoForm = ('Parabens! O campo B é maior que o campo A')
const erroForm = ('Erro! O campo B deve ser maior que o campo A')

const monte1 = document.querySelector('.Erro');
const monte2 = document.querySelector('.sucesso');

// Limpa mensagens anteriores
monte1.style.display = 'none';
monte2.style.display = 'none';

if (!validaNumero(valorUm, valorDois)) {
    monte1.innerHTML = erroForm
    monte1.style.display = 'block';
    campoOne.value = ''
    campoTwo.value = ''
        
}
else{
    monte2.innerHTML = sucessoForm
    monte2.style.display = 'block';
    
}
})
