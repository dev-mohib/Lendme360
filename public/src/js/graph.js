var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: [],
    datasets: [
      {
        label: "Interest Paid",//Interested Paid
        fill: "false",
        type: 'bar',
        backgroundColor: "rgb(13, 24, 222)",
        borderColor: "rgb(13, 24, 222)",
        data: [],
      },
      {
        label: "Principle Balance",//Principle Balance
        fill: "false",
        type: 'bar',
        backgroundColor: "rgb(201, 12, 204)",
        borderColor: "rgb(201, 12, 204)",
        data: [],
      },
      {
        label: "Principle Paid", //Principle Paid
        fill: "false",
        yAxisID: 'B',
        backgroundColor: "rgb(27, 194, 35)",
        borderColor: "rgb(27, 194, 35)",
        data: [],
      },
      // {
      //   label: "Monthly Payments Paid", //Principle Paid
      //   fill: "false",
      //   backgroundColor: "rgb(212, 189, 15)",
      //   borderColor: "rgb(212, 189, 15)",
      //   data: [],
      // },
    ],
  },

  // Configuration options go here
  options: {
    scales:{
      yAxes:[{
        id: 'A',
        type: 'linear',
        position: 'left',
      }, {
        id: 'B',
        type: 'linear',
        position: 'right',
        ticks:{
          beginAtZero: false
        }
      }]
    }
  },
});
