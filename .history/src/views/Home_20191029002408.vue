<template>
  <el-container style="height: 850px;">
    <el-container>
      <el-aside width="28px" class="sidebar"></el-aside>
      <el-main style="padding: 2%;">
        <el-header>
          <h4>Dashboard</h4>
        </el-header>
        <el-table
          :data="tableData"
          :default-sort="{prop: 'date', order: 'descending'}"
          style="width: 100%"
        >
          <el-table-column prop="date" label="Date" sortable width="180"></el-table-column>
          <el-table-column prop="name" label="Name" width="180"></el-table-column>
          <el-table-column prop="address" label="Address" :formatter="formatter"></el-table-column>
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