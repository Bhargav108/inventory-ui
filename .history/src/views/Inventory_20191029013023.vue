<template>
  <el-container style="height: 100%;">
    <el-main style="padding: 2%;">
      <el-header>
        <h4>Inventory</h4>
      </el-header>
      <inventory-grid></inventory-grid>
      <router-view />
    </el-main>
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