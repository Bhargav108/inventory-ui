<template>
  <inventory-grid></inventory-grid>
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