const phrases = [
  "Dias ruins são necessários para termos dias piores.",
  "Lute como nunca, perca como sempre.",
  "Nenhum obstáculo é grande para quem desiste.",
  "O caminho é longo, mas a derrota é certa.",
  "Não é só uma fase ruim, logo vai piorar.",
  "Seja o protagonista do seu fracasso.",
  "Você é mais fraco do que pensa.",
  "Nunca foi azar, sempre foi incompetência.",
  "Não pare, faça até dar errado.",
  "Acredite. Você nasceu para conquistar grandes fracassos.",
  "Você NÃO é incrível.",
  "Coisas ruins se vão para que piores possam vir.",
  "Seu maior problema é você.",
  "Quando sua mente pensar em desistir, desista",
  "Só dará errado se você tentar.",
  "Para ficar ruim, você terá que melhorar muito.",
  "Acreditar que você pode já é meio caminho errado.",
  "Nunca é tarde para desistir.",
  "Você não pode mudar o seu passado. Mas pode estragar o seu futuro.",
  "O recomeço é uma oportunidade de um novo fracasso",
  "Durma 12 horas por dia, assim as chances de fazer merda caem pela metade",
];

window.onload = () => {
  message = document.querySelector("#message");
  button = document.querySelector("#button");
};

function sendMessage() {
  const totalPhrases = phrases.length;
  const random = Math.floor(Math.random() * totalPhrases);

  message.innerHTML = phrases[random];

  //button.disabled = true;

  //message.style.opacity = 1;
  /*setTimeout(function () {
    message.style.opacity = 0;
    button.disabled = false;
  }, 3000);
  */
}
