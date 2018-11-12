<script>
import slide from './components/slide';
import topNav from './components/topNav';
export default {
  el: '#app',
  components: {
    slide,
    topNav
  }
}
</script>

<template>
<div id="app">
  <el-row>
    <el-col :span="3">
      <div class="slidebar">
        <slide></slide>
      </div>
    </el-col>
    <el-col :span="21">
      <div class="main">
        <topNav></topNav>
        <transition name="fade" mode="out-in">
        <router-view></router-view>
        </transition>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
