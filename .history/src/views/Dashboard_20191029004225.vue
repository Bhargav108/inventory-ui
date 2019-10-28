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

<style scoped lang="scss">
.bordered {
  border: 1px solid rgb(177, 174, 174);
}
.sidebar {
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.2);
}
</style>