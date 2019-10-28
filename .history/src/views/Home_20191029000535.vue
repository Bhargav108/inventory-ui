<template>
  <el-container style="height: 850px; border: 1px solid green;">
    <el-header class="bordered">
      <h3>Dashboard</h3>
    </el-header>
    <el-container>
      <el-aside width="300px" class="bordered"></el-aside>
      <el-main style="padding: 2%;">
        <el-table
          :data="tableData"
          :default-sort="{prop: 'date', order: 'descending'}"
          style="width: 100%"
        >
          <el-table-column prop="date" label="Date" sortable width="180"></el-table-column>
          <el-table-column prop="name" label="Name" width="180"></el-table-column>
          <el-table-column prop="address" label="Address" :formatter="formatter"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ]
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    }
  }
};
</script>

<style scoped lang="scss">
.bordered {
  border: 1px solid rgb(177, 174, 174);
}
</style>