const textProps = {
  title: "Total orders",
  subtitle: "Performance",
  chart: {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: new Date().getFullYear(),
          backgroundColor: "#ed64a6",
          borderColor: "#ed64a6",
          data: [30, 78, 56, 34, 100, 45, 13],
          fill: false,
          barThickness: 8,
        },
        {
          label: new Date().getFullYear() - 1,
          fill: false,
          backgroundColor: "#4c51bf",
          borderColor: "#4c51bf",
          data: [27, 68, 86, 74, 10, 4, 87],
          barThickness: 8,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      interaction: {
        intersect: false,
        mode: "index",
      },
      plugins: {
        legend: {
          labels: {
            color: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          position: "average",
        },
      },
      scales: {
        x: {
          display: false,
          title: {
            display: true,
          },
          ticks: {
            color: "rgba(0,0,0,.4)",
          },
          grid: {
            display: false,
          },
        },
        y: {
          display: true,
          title: {
            display: true,
          },
          ticks: {
            color: "rgba(0,0,0,.4)",
          },
          grid: {
            drawBorder: false,
            borderDash: [2],
            color: "rgba(33, 37, 41, 0.3)",
          },
        },
      },
    },
  },
};
export default textProps;
