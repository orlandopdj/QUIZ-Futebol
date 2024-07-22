/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, 
apenas faça. Essa exibição de pontos é uma das implementações que faremos 
na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, 
busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que 
vimos até aqui.

O uso do Bootstrap ou qualquer biblioteca CSS é opcional. Porém, eu recomendo 
que nesse momento, ao invés de focar em CSS, você foque em desenvolver a 
lógica da aplicação com o JavaScript. Em um momento futuro, você pode voltar 
e melhorar a estilização da aplicação. 
*/


const form = document.querySelector('form')
const popup = document.querySelector('.disable-popup')
const title = document.querySelector('.title')
const popupInsert = document.querySelector('.popup')
let msg = document.querySelector('acerto')
const p = document.createElement('p')
const reiniciar = document.querySelector('.reiniciar')

const gabarito = ['B', 'C', 'C', 'B', 'A']
let score = 0

form.addEventListener('submit', event => {
    event.preventDefault()
    const userRespostas = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
    ]
    const restart = () => {
        reiniciar.addEventListener('click', () => {
            form.classList.remove('popup-neutro')
            popup.setAttribute('class', 'disable-popup')
            form.inputQuestion1[0].checked = true
            form.inputQuestion2[0].checked = true
            form.inputQuestion3[0].checked = true
            form.inputQuestion4[0].checked = true
            form.inputQuestion5[0].checked = true
        })
    }
    gabarito.forEach((pergunta, i) => {
        if (pergunta === userRespostas[i]) {
            score += 20
        }
        if (score <= 100) {
            title.textContent = 'VOCÊ ACERTOU:'
            p.innerHTML = `<span class="res">${score} %</span>das perguntas <br> Parabéns você entende muito sobre \n futebol`
            restart()
        }
        if (score <= 60) {
            title.textContent = 'VOCÊ ACERTOU:'
            p.innerHTML = `<span class="res">${score} %</span>das perguntas <br> Parabéns`
            restart()
        }
        if (score <= 40) {
            title.textContent = 'VOCÊ ACERTOU:'
            p.innerHTML = `Acertou <span class="res">${score} %</span> <br> pelo visto você não conhece a história do futebol =(`
            restart()
        }
        if (score < 20) {
            title.textContent = '😓'
            p.innerHTML = `Você errou todas as perguntas, acredito que você não acompanha nada sobre futebol =(`
            restart()
        }
        form.setAttribute('class', 'popup-neutro')
        popup.setAttribute('class', 'popup-container')
        p.setAttribute('class', 'acerto')
        title.insertAdjacentElement('beforeend', p)
        scrollTo(0, 0)
    }
    )
})
