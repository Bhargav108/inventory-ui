<template>
  <el-row :gutter="10">
    <el-col :span="12" class="bordered hidden-xs-only">
      <el-row class="logo_area bordered">
        <el-col :span="12">
          <h2>Branding Image</h2>
        </el-col>
      </el-row>
      <el-row class="bordered">
        <el-col :span="12">
          <h2>Branding Desc</h2>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="12" :xs="24" class="bordered">
      <h4>Login Form</h4>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.bordered {
  border: 1px solid green;
}
.full_height {
  height: 95vh;
}
.logo_area {
  height: 300px;
  margin: 3%;
}
</style>
