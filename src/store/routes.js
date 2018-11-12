import hello from '../components/HelloWorld.vue'
import table from '../components/table.vue'
import charts from '../components/charts.vue'
let routes = [
  {
    path: '/',
    component: hello,
    name: '主页'
  },
  {
    path: '/table',
    component: table,
    name: '表格'
  },
  {
    path: '/charts',
    component: charts,
    name: '图表'
  },
]

export default routes;
