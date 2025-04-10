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
        backgroundColor: [
          "lightgreen",
          "lightgreen",
          "lightgreen",
          "yellow",
          "yellow",
          "yellow",
          "orange",
          "orange",
          "orange",
          "lightblue",
          "lightblue",
          "lightblue",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
