<template>
  <el-container style="height: 850px;">
    <el-container>
      <el-aside width="250px" class="sidebar"></el-aside>
      <el-main style="padding: 2%;">
        <el-header>
          <h4>Dashboard</h4>
        </el-header>
        <inventory-grid></inventory-grid>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import InventoryGrid from "../components/InventoryGrid";
export default {
  name: "Home",
  components: {
    "inventory-grid": InventoryGrid
  }
};
</script>