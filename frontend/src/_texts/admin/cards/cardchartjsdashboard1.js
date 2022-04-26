const textProps = {
  title: "Sales value",
  subtitle: "Overview",
  color: "blueGray",
  chart: {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: new Date().getFullYear(),
          backgroundColor: "#4c51bf",
          borderColor: "#4c51bf",
          data: [65, 78, 66, 44, 56, 67, 75],
          fill: false,
          tension: 0.4,
        },
        {
          label: new Date().getFullYear() - 1,
          backgroundColor: "#fff",
          borderColor: "#fff",
          data: [40, 68, 86, 74, 56, 60, 87],
          fill: false,
          tension: 0.4,
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
            color: "#FFF",
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
          display: true,
          title: {
            display: true,
          },
          ticks: {
            color: "rgba(255,255,255,.7)",
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
            color: "rgba(255,255,255,.7)",
          },
          grid: {
            drawBorder: false,
            borderWidth: 2,
            borderDash: [3],
            borderDashOffset: [3],
            color: "rgba(255, 255, 255, 0.15)",
          },
        },
      },
    },
  },
};
export default textProps;
