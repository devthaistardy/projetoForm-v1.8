document.getElementById('ordem-servico-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var cliente = document.getElementById('cliente').value;
  var endereco = document.getElementById('endereco').value;
  var telefone = document.getElementById('telefone').value;
  var descricao = document.getElementById('descricao').value;

  // Get selected radio option
  var modoSelecionado = document.querySelector('input[name="modo"]:checked');
  var modoTexto = modoSelecionado ? modoSelecionado.value : 'Nenhum modo selecionado';

  // Get selected services
  var servicosSelecionados = [];
  var servicosCheckboxes = document.getElementsByName('servicos');
  for (var i = 0; i < servicosCheckboxes.length; i++) {
    if (servicosCheckboxes[i].checked) {
      servicosSelecionados.push(servicosCheckboxes[i].value);
    }
  }

  // Create object with form data
  var ordemServico = {
    cliente: cliente,
    endereco: endereco,
    telefone: telefone,
    servicos: servicosSelecionados,
    descricao: descricao,
    modo: modoTexto // Adiciona o modo selecionado ao objeto
  };

  // Display order details
  document.getElementById('cliente-info').innerText = ordemServico.cliente;
  document.getElementById('endereco-info').innerText = ordemServico.endereco;
  document.getElementById('telefone-info').innerText = ordemServico.telefone;
  document.getElementById('descricao-info').innerText = ordemServico.descricao;

  // Display selected services as ordered list
  var servicosList = document.getElementById('servicos-list');
  servicosList.innerHTML = ''; // Clear previous list
  for (var i = 0; i < ordemServico.servicos.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerText = ` ✔️ ${ordemServico.servicos[i]}`;
    servicosList.appendChild(listItem);
  }

  // Display selected mode as title
  document.title = `Ordem de Serviço - ${ordemServico.modo} - ${ordemServico.cliente}`;

  // Seleciona o elemento onde a data e hora serão exibidas
  var dataHoraElemento = document.getElementById("data-hora");
  
  // Cria um objeto Date com a data e hora atuais
  var dataHoraAtual = new Date();
  
  // Formata a data e hora para exibição
  var dataFormatada = dataHoraAtual.toLocaleDateString('pt-BR');
  var horaFormatada = dataHoraAtual.toLocaleTimeString('pt-BR');
  
  // Concatena a data e hora formatadas em uma string
  var dataHoraFormatada = dataFormatada + ' às ' + horaFormatada;
  
  // Define o texto do elemento para a data e hora formatadas
  dataHoraElemento.textContent = dataHoraFormatada;

  // Atualiza o título com o modo selecionado
  document.title = `Ordem de Serviço - ${ordemServico.modo} - ${ordemServico.cliente} - ${dataHoraFormatada}`;

  // Atualiza o h2 com o modo selecionado
  document.querySelector('.detalhes-os h2').innerText = `Detalhes da ${ordemServico.modo}`;

  // Adiciona imagens TESTE
  

  // Imprimir a página
  window.print();
});


//area do Modal de boas vindas

// Obtém o modal
const modal = document.getElementById("myModal");

// Obtém o botão de fechar
const span = document.getElementsByClassName("close")[0];

// Mostra o modal quando a página é carregada
window.onload = function() {
    modal.style.display = "block";
};

// Fecha o modal quando o usuário clica no "X"
span.onclick = function() {
    modal.style.display = "none";
};

// Fecha o modal quando o usuário clica no botão "OK"
document.getElementById("okButton").onclick = function() {
    modal.style.display = "none";
};

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


//fim da area do Modal
