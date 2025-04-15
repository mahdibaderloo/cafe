const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
    datasets: [
      {
        label: "میزان فروش",
        data: [42, 35, 33, 46, 40, 41, 26, 28, 45, 53, 50, 47],
        borderWidth: 1,
        backgroundColor: ["#3f2701"],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            family: "BalooBhaijaan2",
            size: 14,
          },
        },
      },
      tooltip: {
        bodyFont: {
          family: "BalooBhaijaan2",
        },
        titleFont: {
          family: "BalooBhaijaan2",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "BalooBhaijaan2",
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          font: {
            family: "BalooBhaijaan2",
            size: 16,
            weight: "bold",
          },
        },
        ticks: {
          font: {
            family: "BalooBhaijaan2",
          },
        },
      },
    },
  },
});
