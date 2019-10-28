<template>
  <el-container style="height: 850px;">
    <el-container>
      <el-aside width="250px" class="sidebar">
        <side-nav></side-nav>
      </el-aside>
      <el-main style="padding: 2%;">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import SideNav from "../components/SideNav";
export default {
  name: "Home",
  components: {
    "side-nav": SideNav
  }
};
</script>