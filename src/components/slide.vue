<template>
<div>
  <el-row>
    <el-col :span="24">
      <h5 class="nav_logo"><img src="../assets/logo.png" alt="">自定义颜色</h5>
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="$router.push('/table')">Table</el-menu-item>
            <el-menu-item index="1-2" @click="$router.push('/charts')">Charts</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/')">选项2</el-menu-item>
            <el-menu-item index="1-4" @click="$router.push('/')">选项2</el-menu-item>
            <el-menu-item index="1-5" @click="$router.push('/')">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2" @click="$router.push('/')">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" @click="$router.push('/')">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4" @click="$router.push('/')">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</div>
</template>
<style>
.slidebar {
  height: 100vh;
  background: rgb(84, 92, 100);
  overflow-y: auto;
}

.nav_logo {
  background: #333;
  margin: 0;
  height: 30px;
  padding: 25px 0;
  color: #fff;
  line-height: 30px;
}

.nav_logo img {
  height: 30px;
  position: relative;
  margin-right: 10px;
}
</style>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleselect: function (a, b) {
			},
  }
}
</script>
