<template>
  <el-container style="height: 100%;">
    <el-header>
      <h2>Inventory</h2>
      <p>Browse through the list of products in the inventory. You can also add or modify exisintg records</p>
    </el-header>
    <el-main>
      <br />
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