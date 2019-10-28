<template>
  <el-container style="height: 850px;">
    <el-container>
      <el-aside width="250px" class="sidebar"></el-aside>
      <el-main style="padding: 2%;">
        <el-header>
          <h4>Dashboard</h4>
        </el-header>
        <el-table
          :data="tableData"
          :default-sort="{prop: 'title', order: 'descending'}"
          style="width: 100%"
        >
          <el-table-column prop="title" label="title" sortable width="180"></el-table-column>
          <el-table-column prop="brand" label="Brand" width="180"></el-table-column>
          <el-table-column prop="price" label="Price"></el-table-column>
          <el-table-column prop="salePrice" label="Sale Price"></el-table-column>
          <el-table-column align="right">
            <template slot="header">
              <el-input v-model="search" size="mini" placeholder="Type to search" />
            </template>
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
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