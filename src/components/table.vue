<template>
<div class="table_wrapper">
  <el-table :data="tableData4" stripe style="max-width: 100%" max-height="90vh">
    <el-table-column prop="date" label="日期">
    </el-table-column>
    <el-table-column prop="name" label="姓名">
    </el-table-column>
    <el-table-column prop="province" label="省份">
    </el-table-column>
    <el-table-column prop="city" label="市区">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>
    <el-table-column prop="zip" label="邮编">
    </el-table-column>
    <el-table-column  label="操作">
      <template slot-scope="scope">
     <el-button
       @click.native.prevent="deleteRow(scope.$index, tableData4)"
       type="text"
       size="small">
       移除
     </el-button>
   </template>
    </el-table-column>
  </el-table>
</div>
</template>
<style>
   .table_wrapper {
      padding: 30px;
   }
</style>
<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData4: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
