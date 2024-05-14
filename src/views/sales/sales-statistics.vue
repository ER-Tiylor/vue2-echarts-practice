<template>
  <div class="page-sales-statistics">
    <chart-view
      :chart-option="chart1_option"
      :has-data="chart1_has_data"
      ref="chart1"
      :auto-resize="true"
      class="chart1-bar"
      height="100%"
    >
    </chart-view>
    <button @click="updateChart1Data">恢复图表</button>
    <button @click="updateChart">更新图表</button>
  </div>
</template>
<script>
import { getChart1BarOption } from "@/components/chart/options/chart1-bar";
export default {
  name: "SalesStatistics",
  data() {
    return {
      chart1_has_data: false,
      chart1_option: {},
    };
  },
  mounted() {
    this.updateChart1Data();
  },
  methods: {
    // 更新图表1数据
    updateChart1Data() {
      try {
        const res = [
          { key: "北京", value: 10 },
          { key: "上海", value: 9 },
          { key: "广州", value: 8 },
        ];
        this.chart_has_data = true;
        // 获取静态数据（静态样式数据）
        let tempOption = getChart1BarOption();
        // 修改动态数据（动态值数据）
        tempOption.series[0].data = res.map((i) => i.value / 100);
        tempOption.yAxis.data = res.map((i) => i.key);
        // 更新图表
        this.chart1_option = tempOption;
      } catch (error) {
        console.log("请求异常", error);
      }
    },
    updateChart() {
      // 数据量很庞大时结合组件方式，采用增量更新
      this.$nextTick(() => {
        const res = [
          { key: "北京", value: 2 },
          { key: "上海", value: 3 },
          { key: "广州", value: 6 },
        ];
        console.log(this.$refs.chart1);
        this.$refs.chart1.pureSetOptions({
          series: [
            {
              data: res.map((i) => i.value / 100),
              type: "bar",
            },
          ],
        });
      });
    },
  },
};
</script>
