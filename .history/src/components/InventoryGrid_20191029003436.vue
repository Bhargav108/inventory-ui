<template>
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
        <el-input v-model="search" size="mini" placeholder="search by name, brand ..." />
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "inventory-grid",
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