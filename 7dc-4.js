var numeroMaquina = Math.round(Math.random() * 11);

var perguntaNumero = parseInt(prompt("Qual é o número certo?"));

var tentativas = 3;

while(numeroMaquina != perguntaNumero && tentativas > 0) {
  alert("Errou! Vamos lá, tente de novo a seguir. Você tem mais " + tentativas + " chance(s).")
  tentativas--
  perguntaNumero = parseInt(prompt("Qual é o número certo?"));  
}

if(numeroMaquina == perguntaNumero) {
  alert("Parabéns! Você acertou!")
} else {
  alert("Que pena! Você tem " + tentativas + " tentativas e não pode continuar. O número era " + numeroMaquina + ". GAME OVER!")