<template>
  <div class="chart">
    <div ref="chart" :style="{ height: height, width: width }" />
  </div>
</template>
<script>
export default {
  name: "ChartView",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "350px",
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    chartOption: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: "canvas",
    },
    hasData: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    chartOption: {
      deep: true,
      handler(newVal) {
        this.setOptions(newVal);
      },
    },
  },
  mounted() {
    this.initChart();
    if (this.autoResize) {
      window.addEventListener("resize", this.resizeHandler);
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    if (this.autoResize) {
      window.removeEventListener("resize", this.resizeHandler);
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    resizeHandler() {
      this.chart.resize();
    },
    initChart() {
      this.chart = this.$echarts.init(this.$refs.chart, "", {
        renderer: this.type,
      });
      this.chart.setOption(this.chartOption);
      this.chart.on("click", this.handleClick);
    },
    handleClick(params) {
      this.$emit("click", params);
    },
    setOptions(option) {
      this.clearChart();
      this.resizeHandler();
      if (this.chart) {
        this.chart.setOption(option);
      }
    },
    pureSetOptions(option) {
      if (this.chart) {
        this.chart.setOption(option);
      }
    },
    refresh() {
      this.setOptions(this.chartOption);
    },
    clearChart() {
      this.chart && this.chart.clear();
    },
  },
};
</script>
<style>
.chart {
  height: 100%;
}
</style>
