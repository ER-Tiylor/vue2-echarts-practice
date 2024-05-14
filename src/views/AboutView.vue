<template>
  <div class="page-sales-statistics">
    <chart-view
      :chart-option="chart1_option"
      :has-data="chart1_has_data"
      :auto-resize="true"
      class="chart1-bar"
      height="100%"
    >
    </chart-view>
  </div>
</template>
<script>
import { getChart1BarOption } from "@/components/options/chart1-bar";
export default {
  name: "SalesStatistics",
  data() {
    return {
      chart1_has_data: false,
      chart1_option: null,
    };
  },
  mounted() {
    this.updateChart1Data();
  },
  methods: {
    // 更新图表1数据
    updateChart1Data() {
      try {
        const res = setTimeout(() => {
          return [
            { key: "北京", value: 10 },
            { key: "上海", value: 9 },
            { key: "广州", value: 8 },
          ];
        });
        this.chart_has_data = true;
        // 数组处理与组装，在逻辑上尽量动静分离，静态样式和动态数据分离。
        this.chart1_option = getChart1BarOption() || this.chart1_option;
        this.chart1_option.series[0].data = res.map((i) => i.value / 100);
        this.chart1_option.yAxis.data = res.map((i) => i.key);
        // 数据量很庞大时结合组件方式，采用增量更新
        this.$nextTick(() => {
          this.$refs.chart3bar.setOption({
            series: [
              {
                data: res.map((i) => i.value / 100),
                type: "bar",
                barWidth: "9px",
              },
            ],
          });
        });
      } catch (error) {
        console.log("请求异常", error);
      }
    },
  },
};
</script>
