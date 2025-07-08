const botoesComprar = document.querySelectorAll('.btn-comprar');

botoesComprar.forEach(botao => {
  botao.addEventListener('click', () => {
    const card = botao.parentElement;
    const nomeProduto = card.querySelector('h2').textContent;
    alert(`${nomeProduto} adicionado ao carrinho!`);
  });
});



