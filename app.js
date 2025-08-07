let amigos = [];
let sorteados = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (!nome) return alert("Digite um nome.");
  if (amigos.includes(nome)) return alert("Esse nome já foi adicionado.");

  amigos.push(nome);
  input.value = "";

  const lista = document.getElementById("listaAmigos");
  lista.style.display = "block";
  lista.innerHTML = amigos.map(n => `<li>${n}</li>`).join("");
}

function sortearAmigo() {
  const res = document.getElementById("resultado");
  const lista = document.getElementById("listaAmigos");

  if (!amigos.length) return alert("Adicione nomes antes de sortear.");
  if (sorteados.length === amigos.length) return alert("Todos já foram sorteados.");

  let nome;
  do {
    nome = amigos[Math.floor(Math.random() * amigos.length)];
  } while (sorteados.includes(nome));

  sorteados.push(nome);
  res.innerHTML = `<strong>O amigo secreto sorteado é:</strong> ${nome}`;
  lista.style.display = "none";

  if (sorteados.length === amigos.length)
    document.getElementById("botaoZerar").style.display = "inline-block";
}

function reiniciarJogo() {
  amigos = [];
  sorteados = [];
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("listaAmigos").style.display = "none";
  document.getElementById("amigo").value = "";
  document.getElementById("botaoZerar").style.display = "none";
}

