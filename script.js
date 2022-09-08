const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

// clicar em fazer pergunta
const fazerPergunta = () => {
  const valorDaPergunta = inputPergunta.value
  const temValorVazio = valorDaPergunta == false

  if (temValorVazio)
    return alert("Digite sua pergunta")

  buttonPerguntar.setAttribute("disabled", true)


  // gerar numero aletorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  const pergunta = `<div>${valorDaPergunta}</div>`
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // zerando o input após perguntar
  inputPergunta.value = '';

  // sumir a resposta depois de 3 segundos
  setTimeout(() => {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}

//Adicionando o evento de fazer pergunta ao botão
buttonPerguntar.addEventListener('click', fazerPergunta)

// Adicionando o evento de fazer a perguntar quando apertar a tecla Enter;
document.addEventListener('keyup', (e) => {
  const teclaEnter = e.key === 'Enter';
  (teclaEnter)
    ? fazerPergunta()
    : null;
})