// Lista de ordens
let orders = [];

// Adicionar ordem
function adicionarOrdem() {
  const cliente = document.getElementById('cliente').value;
  const descricao = document.getElementById('descricao').value;
  const prioridade = document.getElementById('prioridade').value;
  const dataEntrega = document.getElementById('data-entrega').value;
  const status = document.getElementById('status').value;

  if (cliente && descricao && prioridade && dataEntrega && status) {
    const order = {
      cliente,
      descricao,
      prioridade,
      dataEntrega,
      status
    };

    orders.push(order);
    exibirOrdens();
    limparFormulario();
  } else {
    alert('Por favor, preencha todos os campos.');
  }
}

// Exibir ordens na lista
function exibirOrdens() {
  const ordersList = document.getElementById('ordens');
  ordersList.innerHTML = '';

  orders.forEach((order, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>Ordem ${index + 1}</strong><br>
      Cliente: ${order.cliente}<br>
      Descrição: ${order.descricao}<br>
      Prioridade: ${order.prioridade}<br>
      Data de Entrega: ${order.dataEntrega}<br>
      Status: ${order.status}<br>
      <button onclick="removerOrdem(${index})">Remover</button>
    `;
    ordersList.appendChild(listItem);
  });
}

// Remover ordem
function removerOrdem(index) {
  orders.splice(index, 1);
  exibirOrdens();
}

// Limpar formulário após adicionar ordem
function limparFormulario() {
  document.getElementById('cliente').value = '';
  document.getElementById('descricao').value = '';
  document.getElementById('prioridade').value = 'baixa';
  document.getElementById('data-entrega').value = '';
  document.getElementById('status').value = 'aberta';
}

// Exibição inicial das ordens
exibirOrdens();

