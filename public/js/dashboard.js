function gerarGrafico1(){
  const ctx1 = document.getElementById('myChart_1').getContext('2d');

  const data1 = {
    labels: [],
    datasets: [{
      data: [],
      fill: true, // Preencher abaixo da linha
      tension: 0.4
    }]
  };

  // Configurações do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top'
      },
    
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Dias',
          font: {
            size: 16, // Tamanho da fonte
            family: 'Roboto', // Fonte da legenda
            weight: 'bold' // Estilo da fonte (negrito)
          },
          color: 'black'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Quantidade',
          font: {
            size: 16, // Tamanho da fonte
            family: 'Roboto', // Fonte da legenda
            weight: 'bold' // Estilo da fonte (negrito)
          },
          color: 'black'
        }
      }
    }
  };

  // Criando o gráfico de linha
  chart1 = new Chart(ctx1, {
    type: 'line', // Define o tipo como "line"
    data: data1,
    options: options
  });
  grafico_linha(1)
}


function gerarGrafico2(){
  const ctx2 = document.getElementById('myChart_2').getContext('2d');

  const data2 = {
    labels: ['1º', '2º', '3º', '4º', '5º'], // Rótulos do eixo Y (ranking)
    datasets: [{
      data: [12, 19, 3, 5, 7], // Valores das barras
      backgroundColor: [
        '#00FF00',  // Verde
        '#33CC33',  // Verde claro
        '#66B266',  // Verde amarelado
        '#FF8000',  // Laranja
        '#FFA500'   // Laranja claro
      ],
      borderColor: [
        '#00CC00',  // Verde escuro
        '#299929',  // Verde claro escuro
        '#4C9A4C',  // Verde-amarelado escuro
        '#E67300',  // Laranja escuro
        '#E59400'   // Laranja mais escuro
      ],
      borderWidth: 1,
      titles: [] // Títulos dinâmicos
    }]
  };
  
  // Configurações do gráfico
  const barOptions = {
    responsive: true,
    indexAxis: 'y', // Define o gráfico como horizontal
    plugins: {
      legend: {
        display: false, // Oculta a legenda do dataset
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const index = context.dataIndex; // Índice da barra atual
            const dataset = context.dataset; // Dataset associado
            const title = dataset.titles[index]; // Obtém o título correspondente
            const value = context.raw; // Obtém o valor correspondente
  
            // Retorna o título e o valor formatados
            return `${title}: ${value}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Quantidade', // Título do eixo X
          font: {
            size: 16, // Tamanho da fonte
            family: 'Roboto', // Fonte
            weight: 'bold' // Negrito
          },
          color: 'black'
        },
        beginAtZero: true // Inicia no zero
      },
      y: {
        title: { // Título do eixo Y
          font: {
            size: 16,
            family: 'Roboto',
            weight: 'bold'
          },
          color: 'black'
        },
        ticks: {
          font: {
            size: 20, // Tamanho da fonte dos rótulos
            family: 'Roboto',
            weight: 'bold'
          },
          color: 'black' // Cor dos rótulos
        }
      }
    }
  };
  
  // Criação do gráfico
  chart2 = new Chart(ctx2, {
    type: 'bar', // Tipo de gráfico
    data: data2,
    options: barOptions // Configurações do gráfico
  });
  grafico_bar()
}





