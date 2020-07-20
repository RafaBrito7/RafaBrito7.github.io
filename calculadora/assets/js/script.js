// Função para calcular
function calculaTabuada() {
  // Obtendo do DOM o tbody da tabela
  const tabuada = document.querySelector('#tabuada tbody');
  // Obtendo o Valor A do campo input number e convertendo em inteiro
  let valorA = parseInt(document.querySelector('#valorA').value);

  // Limpando o conteúdo do tbody
  tabuada.innerHTML = ' ';

  //Laço para fazer a função ir de 0 a 10
  for (let i = 0; i <= 10; i++) {
    // Implementando qual será a lógica utilizada
    let resultado = valorA * i;
    // Criando o template que será seguido no html
    let template = `
          <td>${i}</td>
          <td>x</td>
          <td>${valorA}</td>
          <td>=</td>
          <td>${resultado}</td>
          `;
    // Criando o elemento tr
    let tr = document.createElement('tr');
    // Inserindo as colunas na linha
    tr.innerHTML = template;
    // Inserindo a linha da tabela
    tabuada.append(tr);
  }
}

// Chamando a execução da função
calculaTabuada();

// Adicionando a chamada do evento para execução
document.querySelector('#valorA').addEventListener('change', calculaTabuada);
