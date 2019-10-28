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


<style scoped lang="scss">
.bordered {
  border: 1px solid rgb(177, 174, 174);
}
</style>