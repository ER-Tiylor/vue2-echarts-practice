export const getChart1BarOption = () => {
  const defaultConfig = {
    tooltip: {
      trigger: "item",
    },

    color: "#FAD632",
    grid: {
      top: 0,
      bottom: 30,
      left: 80,
    },
    yAxis: {
      type: "category",
      data: [],
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#999",
      },
      axisLine: {
        lineStyle: {
          color: "#ccc",
        },
      },
    },
    xAxis: {
      type: "value",

      axisLabel: {
        color: "#999",
        formatter: function (value) {
          if (value % 1 !== 0) {
            return "";
          }
          return value;
        },
      },
      splitLine: {
        lineStyle: {
          color: "#eee",
        },
      },
    },
    series: [
      {
        data: [],
        type: "bar",
        barWidth: "9px",
      },
    ],
  };
  return defaultConfig;
};
