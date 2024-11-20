const ctx1 = document.getElementById('myChart_1').getContext('2d');
const ctx2 = document.getElementById('myChart_2').getContext('2d');

const data1 = {
  labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  datasets: [{
    data: [2, 5, 9, 6, 7, 12, 15],
    fill: true, // Preencher abaixo da linha
    tension: 0.4 // Suaviza a curva da linha
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
    title: {
      display: true,
      text: 'Time line de Publicações',
      font: {
        size: 24, // Tamanho da fonte
        family: 'Roboto', // Fonte da legenda
        weight: 'bold' // Estilo da fonte (negrito)
      },
      color: 'black',
      tooltip: {
        enabled: true, // Habilita o tooltip (padrão)
        callbacks: {
          label: function (context) {
            return `Quantidade: ${context.raw}`; // Texto exibido no tooltip
          }
        }
      }

    }
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
new Chart(ctx1, {
  type: 'line', // Define o tipo como "line"
  data: data1,
  options: options
});











    // Configura os dados do gráfico
    const data2 = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
      datasets: [{
        label: 'Preferências de Cores',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    };

    // Configurações do Gráfico de Rosca
    const doughnutOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Gráfico de Rosca'
        }
      }
    };

    // Configurações do Gráfico de Pizza
    const pieOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'right'
        },
        title: {
          display: true,
          text: 'Gráfico de Pizza'
        }
      }
    };

    // Criação do Gráfico de Rosca
    new Chart(ctx2, {
      type: 'doughnut',
      data: data2,
      options: doughnutOptions
    });