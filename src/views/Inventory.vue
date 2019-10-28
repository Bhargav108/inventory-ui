<template>
  <el-container style="height: 100%;">
    <el-header>
      <h2>Inventory</h2>
    </el-header>
    <el-main>
      <inventory-grid></inventory-grid>
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