document.getElementById('ordem-servico-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var cliente = document.getElementById('cliente').value;
  var endereco = document.getElementById('endereco').value;
  var telefone = document.getElementById('telefone').value;
  var descricao = document.getElementById('descricao').value;

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
    descricao: descricao
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

  document.title = `Manutenção preventiva - ${ordemServico.cliente} - ${dataHoraFormatada}`;

  window.print()
});




