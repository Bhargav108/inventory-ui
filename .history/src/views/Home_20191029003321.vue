<template>
  <el-container style="height: 850px;">
    <el-container>
      <el-aside width="250px" class="sidebar"></el-aside>
      <el-main style="padding: 2%;">
        <el-header>
          <h4>Dashboard</h4>
        </el-header>
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
  },
  data() {
    return {
      tableData: [
        {
          title: "Nike AirMax",
          brand: "Nike",
          image: "",
          price: "300",
          salePrice: "280",
          stock: 3000
        }
      ]
    };
  },
  methods: {
    formatter(row) {
      return row.address;
    }
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