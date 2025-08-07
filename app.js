//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let sorteados = [];
let jogoFinalizado = false;


function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    return;
  }

  amigos.push(nome);
  input.value = "";

  // Mostrar novamente a lista
  const lista = document.getElementById("listaAmigos");
  lista.style.display = "block";

  atualizarListaAmigos();
}


function atualizarListaAmigos() {
  // 1. Obter o elemento da lista onde os amigos serão exibidos
  const lista = document.getElementById("listaAmigos");

  // 2. Limpar a lista para não ter nomes duplicados
  lista.innerHTML = "";

  // 3. Percorrer o array de amigos
  for (let i = 0; i < amigos.length; i++) {
    // 4. Criar o elemento <li> para cada amigo
    const item = document.createElement("li");
    item.textContent = amigos[i];

    // 5. Adicionar o <li> dentro da lista HTML
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  if (amigos.length === 0) {
    alert("A lista de amigos está vazia. Adicione pelo menos um nome para sortear.");
    return;
  }

  if (sorteados.length === amigos.length) {
    alert("Todos os amigos já foram sorteados.");
    return;
  }

  let nomeSorteado;

  do {
    const indice = Math.floor(Math.random() * amigos.length);
    nomeSorteado = amigos[indice];
  } while (sorteados.includes(nomeSorteado));

  sorteados.push(nomeSorteado);

  resultado.innerHTML = `<strong>O amigo secreto sorteado é:</strong> ${nomeSorteado}`;

  // Esconde a lista durante o sorteio
  const lista = document.getElementById("listaAmigos");
  lista.style.display = "none";

  // Se todos foram sorteados, exibe o botão de reiniciar
  if (sorteados.length === amigos.length) {
    jogoFinalizado = true;
    document.getElementById("botaoZerar").style.display = "inline-block";
  }
}

function reiniciarJogo() {
  // Limpa todos os dados
  amigos = [];
  sorteados = [];
  jogoFinalizado = false;

  // Limpa a interface
  document.getElementById("resultado").innerHTML = "";

  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  lista.style.display = "none";

  // Limpa o campo de input
  document.getElementById("amigo").value = "";

  // Esconde o botão de zerar
  document.getE

}
