<template>
  <span>
    <el-table :data="tableData" :default-sort="{prop: 'title', order: 'descending'}">
      <el-table-column prop="title" label="title" sortable width="180"></el-table-column>
      <el-table-column prop="brand" label="Brand" width="180"></el-table-column>
      <el-table-column prop="image" label="Product Image" width="200">
        <template slot-scope="scope">
          <img :src="scope.row.image_uri" alt />
        </template>
      </el-table-column>
      <el-table-column prop="price" label="Price"></el-table-column>
      <el-table-column prop="salePrice" label="Sale Price"></el-table-column>
      <el-table-column prop="stock" label="Stock"></el-table-column>
    </el-table>
    <div class="paginate">
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
  </span>
</template>

<script>
export default {
  name: "inventory-grid",
  data() {
    return {
      search: "",
      tableData: [
        {
          title: "Nike AirMax",
          brand: "Nike",
          image_uri: "https://source.unsplash.com/100x100/?product",
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

<style scoped="true">
.paginate {
  margin-top: 1rem;
  text-align: center;
}
</style>