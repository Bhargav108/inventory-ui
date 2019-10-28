<template>
  <el-container style="height: 100%;">
    <el-main>
      <el-header>
        <h2>Inventory</h2>
      </el-header>
      <inventory-grid></inventory-grid>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import InventoryGrid from "../components/InventoryGrid";
export default {
  name: "Inventory",
  components: {
    "inventory-grid": InventoryGrid
  }
};
</script>