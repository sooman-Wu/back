<template>
<div class="charts_wrapper">
  <el-col :span="12">
    <div id="myChart"></div>
  </el-col>
</div>
</template>
<style>
#myChart {
  width: 100%;
  height: 350px;
}
</style>
<script>
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }]
      })
    }
  }
}
</script>
